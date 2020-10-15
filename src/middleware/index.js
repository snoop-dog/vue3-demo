import axios from 'axios'
import qs from 'qs'

const request = axios.create({
  timeout: 60000,
  baseURL: 'http://172.16.3.225:9527',
  // withCredentials: true,
})

let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const cancelToken = axios.CancelToken
const removePending = (ever) => {
  for(let p in pending){
    if(pending[p].u === ever.url + '&' + ever.method) { // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}

request.interceptors.request.use(
  (config) => {
    if (config.method.toUpperCase() == 'GET') {
      config.params = { ...config.data }
    } else if (config.method.toUpperCase() == 'POST') {
      config.headers['content-type'] = 'appliaction/x-www-form-urlencoded'
      config.data = qs.stringify(config.data)
    }

    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken((c) => {
        pending.push({ u: config.url + '&' + config.method, f: c })
    })
    
    return config
  },
  (err) => {
    Promise.reject(err)
  },
)

request.interceptors.response.use(
  (res) => {
    removePending(res.config)
    if (res.statusText == 'OK') {
      return res.data
    }
  },
  (err) => {
    Promise.reject(err);
  },
)

export default (method, url, data = {}) => {
  if (method.toUpperCase() == 'GET') {
    return request.get(url, {
      params: data,
    })
  } else if (method.toUpperCase() == 'POST') {
    return request.post(url, data)
  }
}

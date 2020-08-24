import httpRequest from '../middleware/index'

/**
 * @api {post} /api/login 登录请求
 * @param {Object} params 登录请求参数
 */
export function doLogin (params) {
  return new Promise((resolve, reject) => {
    httpRequest('post', '/api/login', params)
    .then(res => {
      resolve(res)
    })
    .catch(error => {
      reject(error)
    })
  })
}
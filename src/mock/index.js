const http = require('http-proxy')
const Mock = require('mockjs')

const data = {
    data: {
        access_token: 'hello world',
        expires: 3600
    },
    ret: 1,
    message: '操作成功'
}
Mock.mock('/api/login', data)
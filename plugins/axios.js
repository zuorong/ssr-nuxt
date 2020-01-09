import Cookies from 'js-cookie'
import { getCookie } from '~/utils/tools'
const qs = require('qs')
function handleError (code, redirect) {
  switch (code) {
    case 500:
      redirect(`/error/500`)
      break
    case 400:
      // token过期
      redirect(`/login?redirect=/&from=400`)
      break
    case 404:
      redirect(`/error/404`)
      break
  }
}
export default function ({ req, $axios, redirect }) {
  // 白名单，不需要发送token字段的接口
  const whileList = ['/login', '/test', '/steven', '/index.php']
  // 发送请求拦截器
  $axios.interceptors.request.use(function (config) {
    if (process.server) {
      // 服务端发送请求并且需要token验证的接口，走这里
      if (!whileList.includes(config.url)) {
        const cookie = req && req.headers.cookie
        config.headers = {
          'X-Authorization': getCookie(cookie).token
        }
      }
      config.baseURL = process.env.baseUrl
    }
    if (process.client) {
      // 客户端发送请求并且需要token验证的接口，走这里
      if (!whileList.includes(config.url)) {
        config.headers.common['X-Authorization'] = Cookies.get('token')
      }
    }
    config.data = qs.stringify(config.data)
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  // 响应请求拦截器
  $axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    handleError(error.response.status, redirect)
  })
}

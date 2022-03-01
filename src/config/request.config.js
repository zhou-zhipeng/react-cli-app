import axios from 'axios'
import qs from 'qs'
import { connect } from 'react-redux'

const service = axios.create({
  baseURL: '',
  timeout: 10000, // request timeout,通用接口的请求超时时间，特殊接口请单独设置
  retry: 0, // 请求失败之后自动请求的次数
  retryDelay: 1000, // 重新请求的间隔时间
})
service.interceptors.request.use(
    (config) => {
    config.headers.authorization = localStorage.getItem('authorization') || ''
    if (config.auth && !config.headers.authorization) { // 未登录且要鉴权请求返回错误
        return Promise.reject(config)
    }
    if (config.headers['Content-Type'] === 'multipart/form-data') return config
    if (config.headers['Content-Type'] === 'application/json') {
      config.data = JSON.stringify(config.data)
    }
    if (
      (config.method === 'post' ||
        config.method === 'put' ||
        config.method === 'delete') &&
      typeof config.data !== 'string'
    ) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
export default service

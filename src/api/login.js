import Mock from 'mockjs'
import qs from 'qs'

import request from '@/config/request.config'

import Token from '@/mock/login'

Mock.mock('/use/login', 'post', (config) => {
  if (config.body) {
    let params = qs.parse(config.body)
    if (!params.username || !params.password) {
      return Token.error
    }
  }
  return Token.success
})

export function apiGetLogin(data) {
  return request({
    url: '/use/login',
    method: 'post',
    data,
  })
}

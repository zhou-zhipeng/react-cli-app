import Mock from 'mockjs'
import qs from 'qs'

import request from '@/config/request.config'

import Token from '@/mock/login'
import Logout from '@/mock/login/logout'
import UserInfo from '@/mock/login/userInfo'
// 登录
Mock.mock('/use/login', 'post', (config) => {
  if (config.body) {
    let params = qs.parse(config.body)
    if (!params.username || !params.password) {
      return Token.error
    }
  }
  return Token.success
})
// 退出
Mock.mock('/use/logout', 'get', (config) => {
  return Logout.success
})
// 获取用户信息
Mock.mock('/use/userInfo', 'get', (config) => {
  return UserInfo.success
})

export function apiGetLogin(data) {
  return request({
    url: '/use/login',
    method: 'post',
    data,
  })
}

export function apiGetLogout() {
  return request({
    url: '/use/logout',
    method: 'get',
    auth: true,
  })
}

export function apiGetUserInfo() {
  return request({
    url: '/use/userInfo',
    method: 'get',
    auth: true,
  })
}

import Mock from 'mockjs'
import qs from 'qs'

import * as MockData from '@/mock/login'
import request from '@/config/request.config'

// 登录
Mock.mock('/use/login', 'post', (config) => {
  if (config.body) {
    let params = qs.parse(config.body)
    if (!params.username || !params.password) {
      return MockData.login.error
    }
  }
  return MockData.login.success
})
// 退出
Mock.mock('/use/logout', 'get', (config) => {
  return MockData.logout.success
})
// 获取用户信息
Mock.mock('/use/userInfo', 'get', (config) => {
  return MockData.userInfo.success
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

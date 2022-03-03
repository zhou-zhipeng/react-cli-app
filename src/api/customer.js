/*
* 模拟后端接口客户列表数据
*/ 
import Mock from 'mockjs'
// import qs from 'qs'

import request from '@/config/request.config'

import UserList from '@/mock/user/list'

Mock.mock('/user/list', 'get', (config) => {
  return UserList.success
})

export function apiGetUserList() {
  return request({
    url: '/user/list',
    method: 'get',
    auth: true,
  })
}

/*
* 模拟后端接口评论列表数据
*/ 
import Mock from 'mockjs'
// import qs from 'qs'

import request from '@/config/request.config'

import CommentList from '@/mock/comment/list'

Mock.mock('/comment/list', 'get', (config) => {
  return CommentList.success
})

export function apiGetCommentList() {
  return request({
    url: '/comment/list',
    method: 'get',
    auth: true,
  })
}

import Mock from 'mockjs'
// import qs from 'qs'

import request from '@/config/request.config'

import MenuList from '@/mock/home/menu'

Mock.mock('/home/menu', 'get', (config) => {
  //   console.log(config)
  //   if (config.body) {
  //     let params = qs.parse(config.body)
  //     if (!params.username || !params.password) {
  //       return Token.error
  //     }
  //   }
  return MenuList.success
})

export function apiGetMenuList() {
  return request({
    url: '/home/menu',
    method: 'get',
    auth: true,
  })
}

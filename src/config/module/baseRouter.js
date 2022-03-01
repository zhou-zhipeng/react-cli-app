/*
 * @基础模块路由配置,不需要鉴权
 * @exact 是否精确匹配路由
 * @auth 是否需要鉴权
 */

import Login from '@/page/login' // 登录
import _404 from '@/page/base/noFound' // 404
export default [
  {
    path: '/login',
    element: Login,
    exact: true,
    auth: false,
  },
  {
    path: '*',
    element: _404,
    exact: false,
    auth: false,
  },
]

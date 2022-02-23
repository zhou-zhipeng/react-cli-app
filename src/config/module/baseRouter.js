/*
 * @基础模块路由配置,不需要鉴权
 * @exact 是否精确匹配路由
 * @auth 是否需要鉴权
 */

import Login from '@/page/login' // 登录
import NoFound from '@/page/base/noFound' // 未找到页面

export default [
  {
    path: '*',
    element: NoFound,
    exact: false,
    auth: false,
  },
  {
    path: '/nofound',
    element: NoFound,
    exact: false,
    auth: false,
  },
  {
    path: '/login',
    element: Login,
    exact: false,
    auth: false,
  },
]

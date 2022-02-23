/*
 * @主页模块路由配置
 * @exact 是否精确匹配路由
 * @auth 是否需要鉴权
 */
import Home from '@/page/home' // 主页

export default [
  { path: '/home', element: Home, exact: false, auth: true },
  { path: '/', element: Home, exact: true, auth: true },
]

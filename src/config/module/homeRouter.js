/*
 * @主页模块路由配置
 * @exact 是否精确匹配路由
 * @auth 是否需要鉴权
 */
import Welcome from '@/page/home/welcome' // 主页
import Customer from '@/page/customer' // 客户管理
import Product from '@/page/product' // 产品管理
import Comment from '@/page/comment' // 评论
import CommentList from '@/page/comment/module/list' // 评论列表
import CommentAdd from '@/page/comment/module/add' // 评论列表

export default [
  {
    path: '/',
    element: Welcome,
    exact: false,
    auth: true,
  },
  {
    path: 'product',
    element: Product,
    exact: false,
    auth: true,
  },
  {
    path: 'customer',
    element: Customer,
    exact: false,
    auth: true,
  },
  {
    path: 'comment',
    element: Comment,
    exact: false,
    auth: true,
  },
  {
    path: 'comment/add',
    element: CommentAdd,
    exact: false,
    auth: true,
  },
  {
    path: 'comment/list',
    element: CommentList,
    exact: false,
    auth: true,
  },
]

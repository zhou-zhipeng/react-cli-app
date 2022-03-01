/**
* 路由菜单数据
*/
module.exports = {
  success: {
    data: {
      list: [
        {
          path: 'customer',
          name: '客户管理',
        },
        {
          path: 'product',
          name: '产品列表',
        },
        {
          path: 'comment',
          name: '评论管理',
        },
      ],
    },
    msg: '操作成功',
    status: 200,
  },
  error: {
    data: {},
    msg: '操作失败',
    status: 200,
  },
}

module.exports = {
  success: {
    data: [
      {
        name: 'John Brown',
        title: 'Hook 我有话说',
        contents: 'Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。',
        key: '1',
      },
      {
        name: 'Jerry',
        title: '怎么使用',
        contents: '通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。',
        key: '2',
      },
      {
        name: 'Jeffier',
        title: '函数式更新',
        contents: '如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 setState 的两种用法',
        key: '3',
      },
      {
        name: 'Jim Green',
        title: '注意',
        contents: '与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。',
        key: '4',
      },
    ],
    msg: '操作成功',
    status: 200,
  },
  error: {
    data: '',
    msg: '操作失败',
    status: 200,
  },
}

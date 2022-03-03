/*
 * 参考链接：https://www.cnblogs.com/sanhuamao/p/13773556.html
 * step1: actionTypes.js定义需要管理状态的值
 * step2: action/index.js定义更新管理状态的值的方法
 * step3: reducer/index.js通过分发的方式调用action/index.js方法更新值，并持久化
 * step4: store/index.js中赋初始化值
 * step5: 在组建中引入store和action,并通过store.dispatch(Actions.islogin('isLogin'))更新状态
 *
 */
import { createStore } from 'redux'
import reducer from '../reducer'

const getInitLocal = (data) => {
  if (data) {
    try {
      return JSON.parse(data)
    } catch (error) {
      console.log(error)
    }
  }
  // 如果没有持久化就初始的状态
  return {
    isLogin: false,
    userInfo: {
      name: '',
    },
    authorization: '',
    currentIndex: '/',
    navToggle: true,
  }
}
const initValues = getInitLocal(localStorage.getItem('store'))

const store = createStore(reducer, initValues)

export default store

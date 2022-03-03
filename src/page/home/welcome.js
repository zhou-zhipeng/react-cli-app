// 主页欢迎页面组件
import '@/less/module/home.less'
import React, { Component } from 'react'

// 引入store，获取状态
import store from '@/redux/store'
export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: store.getState().userInfo.name,
    }
  }

  UNSAFE_componentWillMount() {
      if (!this.state.name) { // 防止重复订阅
        store.subscribe(() => {
            this.getUserInfo()
        })
      }
  }

  UNSAFE_componentWillUnmount(){
    store.unsubscribe(() => {
        this.getUserInfo()
    })
  }

  getUserInfo() {
    this.setState({
        name: store.getState().userInfo.name,
    })
  }

  render() {
    const { name } = this.state
    return (
      <div className="welcome">
        <div className="link">欢迎你， {name}</div>
      </div>
    )
  }
}

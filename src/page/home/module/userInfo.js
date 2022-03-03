/*
* 头部用户信息组件
*
*/ 
import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Menu, Dropdown, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

//引入store和action
import store from '@/redux/store'
import * as Actions from '@/redux/actions'

import { apiGetLogout, apiGetUserInfo } from '@/api/user'

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: store.getState().userInfo.name || '',
      islogin: false,
    }
  }

  UNSAFE_componentWillMount() {
    this.getUserInfo()
    this.getlogin()
  }

  getUserInfo() {
    apiGetUserInfo().then((res) => {
        let { data } = res
        if (data.status === 200 && data.data) {
          store.dispatch(Actions.userInfo(data.data))
          this.getlogin()
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  getlogin() {
    this.setState({
      name: store.getState().userInfo.name,
      islogin: store.getState().isLogin,
    })
  }

  logOut() {
    apiGetLogout().then((res) => {
        let { data } = res
        if (data.status === 200) {
          if (data.data) {
            message.success('退出成功！', 1)
            store.dispatch(Actions.isLogin(false))
            store.dispatch(Actions.authorization(''))
            store.dispatch(Actions.currentIndex(''))
            this.getlogin()
          }
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  changeInfo() {
    console.log('修改信息')
  }

  render() {
    const { name, islogin } = this.state
    return (
      <span className="use-info">
        {/* react-router v6 推荐使用hook编写代码 使用class编程式导航暂没有替代方案 */}
        {!islogin && <Navigate to="/login" replace="true" />}
        <span className="use-img">
          <UserOutlined />
        </span>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1" onClick={() => this.changeInfo()}>
                修改信息
              </Menu.Item>
              <Menu.Item key="2" onClick={() => this.logOut()}>
                退出登录
              </Menu.Item>
            </Menu>
          }
          placement="topRight"
          arrow
        >
          <span>{name}</span>
        </Dropdown>
      </span>
    )
  }
}

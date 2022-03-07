import '@/less/module/home.less'
import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  GiftOutlined,
  CommentOutlined,
} from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'
// module
import UserInfo from './module/userInfo'
// api
import { apiGetMenuList } from '@/api/menu'
//引入store和action
import store from '@/redux/store'
import * as Actions from '@/redux/actions'
const { Header, Sider, Content } = Layout
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: store.getState().navToggle,
      menuList: [],
      iconList: [TeamOutlined, GiftOutlined, CommentOutlined],
      activeIndex: store.getState().currentIndex
    }
  }
  UNSAFE_componentWillMount() {
    this.getMenuList()
  }

  getMenuList() {
    apiGetMenuList().then((res) => {
        let { data } = res
        if (data.status === 200) {
          if (data.data.list.length) {
            this.setState({
                menuList: data.data.list
            })
            data.data.list.forEach((element, key) => {
                if (this.state.activeIndex && this.state.activeIndex.includes(element.path)) {
                    this.setState({
                        activeIndex: key.toString()
                    })
                }
            });
          }
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  toggle = () => {
    store.dispatch(Actions.navToggle(!this.state.collapsed)) // 存储导航栏展开状态
    this.setState({
        collapsed: !this.state.collapsed,
    })
  }

  onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    this.setState({
      activeIndex: key,
    })
  }

  render() {
    const {iconList, menuList, activeIndex} = this.state
    return (
      <div id="container">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[activeIndex]} onSelect={this.onSelect}>
                {
                    menuList.map((item, key) => {
                        let Icon = iconList[key]
                        return (
                            <Menu.Item key={key} icon={<Icon />}>
                                <Link to={item.path}>{ item.name }</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: this.toggle,
                }
              )}
              <UserInfo/>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

import '@/less/module/home.less'
import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'

import { apiGetMenuList } from '@/api/menu'
const { Header, Sider, Content } = Layout
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      menuList: [],
      iconList: [UserOutlined, VideoCameraOutlined, UploadOutlined],
      activeIndex: '-1'
    }
  }
  componentWillMount() {
    this.getMenuList()
  }

  getMenuList() {
    apiGetMenuList().then((res) => {
        let { data } = res
        if (data.status === 200) {
          if (data.data.list.length) {
            data.data.list.forEach((element, key) => {
                if (sessionStorage.getItem('currentIndex') && sessionStorage.getItem('currentIndex').includes(element.path)) {
                    this.setState({
                        activeIndex: key.toString()
                    })
                }
            });
            this.setState({
              menuList: data.data.list
            })
          }
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const {iconList, menuList, activeIndex} = this.state
    return (
      <div id="container">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeIndex]}>
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

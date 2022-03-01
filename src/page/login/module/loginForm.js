/*
 * 参考地址：https://github.com/remix-run/history/blob/dev/docs/navigation.md
 */
import React, { Component } from 'react'
import { regExp } from '@/common/regexp'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import { /*createHashHistory*/ createBrowserHistory as history } from 'history'
import {  Navigate } from 'react-router-dom'

import { apiGetLogin } from '@/api/login'
export default class LoginForm extends Component {
  formRef = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      islogin: localStorage.getItem('authorization') || null
    }
  }

  onFinish(values) {
    apiGetLogin(values).then((res) => {
        let { data } = res
        if (data.status === 200) {
          if (data.data.authorization) {
            localStorage.setItem('authorization', data.data.authorization)
            this.setState({
              islogin: true,
            })
          }
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="login-form-body">
        {this.state.islogin && <Navigate to="/" replace="true" />}
        <Form
          ref={this.formRef}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={() => this.onFinish()}
        >
          <Form.Item
            name="username"
            hasFeedback
            rules={[
              { required: true, message: '请输入用户名!' },
              {
                pattern: regExp.accountNo,
                message: '账号4-10位数字或字母组成',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            {/* <a className="login-form-forgot" href="">
                Forgot password
            </a> */}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

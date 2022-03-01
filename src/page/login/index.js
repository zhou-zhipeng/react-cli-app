import '@/less/module/login.less'
import React, { Component } from 'react'
import BackImg from './module/backImg'
import LoginForm from './module/loginForm'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  UNSAFE_componentWillMount() {}
  render() {
    return (
      <div className="login-body">
        <header>
          <BackImg />
        </header>
        <footer>
          <LoginForm />
        </footer>
      </div>
    )
  }
}

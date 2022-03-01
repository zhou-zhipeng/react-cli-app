// 未找到页面组件
import '@/less/module/home.less'
import React, { Component } from 'react';
// import  { createBrowserHistory as history }  from 'history'
// import { Link } from 'react-router-dom'
// import { Progress, Button } from 'antd'
export default class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className="welcome">
                <div className="link">
                    欢迎登录
                </div>
            </div>
        )
    }
}
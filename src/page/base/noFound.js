// 未找到页面组件
import '@/less/module/noFound.less'

import { Component } from 'react';
import  { createBrowserHistory as history }  from 'history'
import { Link } from 'react-router-dom'
import { Progress, Button } from 'antd'
export default class NoFound extends Component {
    constructor(props){
        super(props);
        this.state = {
            history,
        }
    }
    gobacks() {
        this.state.history().back();
    }
    render() {
        return(
            <div className="notfound">
                <div>
                    <Progress type="circle" percent={100} format={() => '404'} width={200} status="active" />
                    <div className="t-c">
                        <p className="mb-big"><Link to="/">跳转至首页</Link></p>
                        <p className="mb-big"><Link to="/login">跳转至登陆页</Link></p>
                        <Button type="primary" onClick={() => this.gobacks()}>返回上一页</Button>
                    </div>
                </div>
            </div>
        )
    }
}
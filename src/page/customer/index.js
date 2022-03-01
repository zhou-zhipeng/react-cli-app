// 未找到页面组件
import '@/less/module/customer.less'
import { Component } from 'react';

// import { Progress, Button } from 'antd'
export default class Customer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    gobacks() {

    }
    render() {
        return(
            <div className="developing notfound">
                <div>
                   客户
                </div>
            </div>
        )
    }
}
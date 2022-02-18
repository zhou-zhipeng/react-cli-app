// 基础路由配置

import Login from '@/page/login' // 登录
import NoFound from '@/page/base/noFound' // 未找到页面

export default {
    "*": {
        element: <NoFound/>,
        exact: true
    },
    "/login":{
        element: <Login/>,
        exact: true
    }
}
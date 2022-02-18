// 主模块路由配置
import Home from '@/page/home' // 主页

export default {
    "/home": {
        element: <Home/>,
        exact: null
    },
    "/": {
        element: <Home/>,
        exact: null
    }
}
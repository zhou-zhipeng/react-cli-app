/*
* 路由鉴权高阶组件
*/
import { Navigate, useLocation } from 'react-router-dom'
//引入store和action
import store from '@/redux/store'

const Routers = ({ children }) => {
    let auth = store.getState().authorization || '' // 是否登录
    let location = useLocation()
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />
    }
    if(auth && location.pathname === "/login") {
      return <Navigate to="/" state={{ from: location }} replace />
    }
    return children
  }

export default Routers
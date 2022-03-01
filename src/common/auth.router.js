import { Navigate, useLocation } from 'react-router-dom'

export default ({ children }) => {
  let auth = localStorage.getItem('authorization') || '' // 是否登录
  let location = useLocation()
  sessionStorage.setItem('currentIndex', location.pathname); //当前激活栏
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  if(auth && location.pathname == "/login") {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}

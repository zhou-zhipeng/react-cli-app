import { Navigate, useLocation } from 'react-router-dom'

export default ({ children }) => {
  let auth = true // 是否登录
  let location = useLocation()
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

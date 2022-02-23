/*
 * @router V 6.0 文档相对于之前的路由做出了很多改变
 * 参考地址: https://reactrouter.com/docs/en/v6/api
 * https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
 *
 */
import * as React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import BaseRouter from './module/baseRouter' // 不需要鉴权
import HomeRouter from './module/homeRouter' // 主页
import RequireAuth from '@/common/auth.router'

const routes = [...BaseRouter, ...HomeRouter] || []
export default () => (
  <Router>
    <Routes>
      <Route>
        {routes.map((item, key) => {
          let Elemnt = item.element
          if (item.auth) {
            return (
              <Route
                key={key}
                exact={item.exact}
                path={item.path}
                element={
                  <RequireAuth>
                    <Elemnt />
                  </RequireAuth>
                }
              />
            )
          } else {
            return (
              <Route
                key={key}
                exact={item.exact}
                path={item.path}
                element={<Elemnt />}
              />
            )
          }
        })}
      </Route>
    </Routes>
  </Router>
)

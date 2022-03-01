/*
 * @router V 6.0 文档相对于之前的路由做出了很多改变
 * 参考地址: https://reactrouter.com/docs/en/v6/api
 * https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
 *
 */
import * as React from "react";
import {
  /*HashRouter,*/ Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from '@/page/home' // 主页
import BaseRouter from './module/baseRouter' // 不需要鉴权路由
import HomeRouter from './module/homeRouter' // 需要鉴权路由
import RequireAuth from '@/common/auth.router' // 鉴权高阶组件

const routes = [...HomeRouter] || []

export default () => (
  <Router>
    <Routes>
        <Route path="/" element={<Home />}>
            {
                routes.map((item, key) => {
                    let Elemnt = item.element
                    return <Route key={key} exact={item.exact} path={item.path} element={ <RequireAuth><Elemnt/></RequireAuth> } />
                })
            }
        </Route>
        {
          BaseRouter.map((item, key) => {
                let Elemnt = item.element
                return <Route key={key} exact={item.exact} path={item.path} element={ <Elemnt/> } />
            })
        }
    </Routes>
  </Router>
)
/*
 * @router V 6.0 文档相对于之前的路由做出了很多改变
 * 参考地址: https://segmentfault.com/a/1190000023684163
 * 
*/
// import * as Login from '@/page/login' // 将所有输出模块合并到一个对象里面

import { /*HashRouter,*/ Route, Routes , BrowserRouter as Router } from 'react-router-dom';

import BaseRouter from './module/baseRouter' // 登录
import HomeRouter from './module/homeRouter' // 主页

const routes = Object.assign(BaseRouter, HomeRouter) || {};

export default () => (
    <Router>
        <Routes>
            <Route>
                {
                    Object.keys(routes).map((item, key) => {
                        console.log('item, key',item, key,routes[item])
                        if (routes[item].exact) {
                            return <Route key={key} exact path={item} element={routes[item].element}/>
                        } else {
                            return <Route key={key} path={item} element={routes[item].element}/>
                        }
                    })
                }
            </Route>
            {
                Object.keys(BaseRouter).map((item, key) => {
                    console.log('item, key',item, key,routes[item])
                    if (routes[item].exact) {
                        return <Route key={key} exact path={item} element={routes[item].element}/>
                    } else {
                        return <Route key={key} path={item} element={routes[item].element}/>
                    }
                })
            }
            {/* <Route exact path="/" element={<Login/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/> */}
        </Routes>
    </Router>
)
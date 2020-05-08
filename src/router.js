import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function A() {
    return (
        <div>我是A组件</div>
    )
}

function B() {
    return (
        <div>我是B组件</div>
    )
}

export default function R() {
    return (
        <Router>
            <ul>
                {/* <Link> 标签，类似于 <a> 标签(最终也会被渲染为 a 标签)。to 属性即可理解为 a 标签的 href属性 */}
                <li><Link to="/a">A组件</Link></li>
                <li><Link to="/b">B组件</Link></li>
                <li><Link to="/e">E组件</Link></li>
            </ul>
            <Route>
                {/* <Switch> 路由中的Switch 代表只匹配一个路由，如果不使用 <Switch> 嵌套，路由会多次匹配 */}
                <Switch>
                    {/* <Route> 的 path 表示属性匹配路径 */}
                    {/* <Route> 的 component 表示路径匹配成功后渲染的组件 */}
                    <Route path="/a" component={A} />
                    <Route path="/b" component={B} />
                    <Route path="/" component={A} />
                </Switch>
            </Route>
        </Router>
    )
}

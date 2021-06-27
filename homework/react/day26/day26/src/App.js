import React from 'react'
import { Route,Link,Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Detail from './Detail'
import Count from './Count'
export default function App() {
    return (
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Detail/:id?" component={Detail}></Route>
            <Route path="/" component={Home}></Route>
            </Switch>
            <Count></Count>
            
        </div>
    )
}

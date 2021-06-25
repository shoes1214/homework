import React, { Component } from 'react'
import { Route,NavLink ,Switch,Redirect} from 'react-router-dom'
import Test from './Test'
import "./App.css"
import Home from './Home'
import Detail from './Detail'
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <NavLink activeClassName="selected" to="/Home">Home</NavLink>
        <NavLink  activeClassName="selected"to="/Detail">Detail</NavLink>
        <NavLink  activeClassName="selected"  to="/abc">abc</NavLink>
        {/* <h1>app组件</h1>
        <Test></Test> */}
        <Switch>
        <Redirect from="/abc" to="/Home"></Redirect>
        <Route path="/Home" component={Home}></Route>
        <Route path="/Detail" component={Detail}></Route>
        <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    )
  }
}

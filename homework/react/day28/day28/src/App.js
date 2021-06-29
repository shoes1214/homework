import React, { Component,Suspense } from 'react'
import {BrowserRouter as Router,Link,Route}from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"
import './App.css'
const Home = React.lazy(() => import('./Home'));
const WithTodos = React.lazy(() => import('./container/WithTodos'));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Suspense fallback={<h1>加载中...</h1>}>
      <Router>
          <Link to="/Home">Home</Link>
          <Link to="/Todos">Todos</Link>

          <Route path="/Home" component={Home}></Route>
          <Route path="/Todos" component={WithTodos}></Route>
          <Route path="/" component={WithTodos} exact></Route>
      </Router>
      </Suspense>
      </Provider>
        


      
    )
  }
}

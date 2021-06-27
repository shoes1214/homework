import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// 引入根组件
import App from './App'
import Store from "./redux/Store"

ReactDOM.render(
  <Provider store={Store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
)
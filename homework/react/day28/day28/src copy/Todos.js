import React from 'react'
import WithHeader from './container/WithHeader'
import WithList from './container/WithList'
import WithFooter from './container/WithFooter'
export default function Todos(props) {
  return (
    <div>
      <div className="todo-container">
        <div className="todo-wrap">
          <WithHeader></WithHeader>
          {props.list.length?<div>
            <WithList></WithList>
            <WithFooter></WithFooter>
          </div>:<h1>恭喜你，没有任务</h1>}
          
        </div>
      </div>
    </div>
  )
}

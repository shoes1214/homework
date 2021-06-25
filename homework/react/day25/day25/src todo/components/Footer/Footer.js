import React, { Component,useEffect } from 'react'
import PubSub from 'pubsub-js'
import './Footer.css'
export default function Footer (props) {
  
    let{all,done,allDone,deleteTodos}=props
    return (
      
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={all===done} onChange={allDone}/>
        </label>
        <span>
          <span>已完成 {done}</span> / 全部 {all}
        </span>
        <button className="btn btn-danger" onClick={deleteTodos}>清除已完成任务</button>
      </div>
    )
  
}

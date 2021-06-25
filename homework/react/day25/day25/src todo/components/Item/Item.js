import React, { Component } from 'react'
import './Item.css'
export default function Item (props) {
    let{item,getId}=props
    return (
      <li>
        <label>
          <input type="checkbox" checked={item.isDone} onChange={()=>{getId(item.id,"update")}}/>
          <span className={item.isDone?"active":""}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={()=>{getId(item.id,"delete")}}>删除</button>
      </li>
    )
  
}

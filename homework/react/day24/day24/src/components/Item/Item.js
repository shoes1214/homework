import React, { Component } from 'react'
import './Item.css'
export default function Item (props) {
    const {item,getId}=props
    return (
      <li>
        <label>
          <input type="checkbox"  onChange={()=>{
            getId(item.id,"update")
          }} checked={item.isDone}/>
          <span className={item.isDone?"active":""}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={()=>{
          getId(item.id,"delete")
        }}>删除</button>
      </li>
    )
  
}

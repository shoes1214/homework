import React, { Component } from 'react'
import './Item.css'
export default function Item (props) {
  const {item}=props
    return (
      <li>
        <label>
          <input type="checkbox" checked={item.isDone} />
          <span className={item.isDone?"active":""} onChange={() => {}}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  
}

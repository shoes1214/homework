import React, { Component,useState ,useEffect} from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header (props) {
 
    let {addTodo}=props
  let[todo,setTodo]=useState("")

  function fn(e){
   
      setTodo(e.target.value.trim())
    
  }

  function add(e){
    if(e.keyCode===13){
      if(!todo)return
      addTodo(todo)
      e.target.value=""
    }  
  }
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={add} onChange={fn}/>
      </div>
    )
  
}

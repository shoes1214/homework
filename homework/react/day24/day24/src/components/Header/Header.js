import React, { Component ,useState} from 'react'
import './Header.css'
export default function Header (props) {
   let [todoName,setTodoName]=useState("")

    function changeTodo(e) {
      if(e.keyCode===13){
        if(!todoName)return
        props.getTodoName(todoName)
        e.target.value=""
      }
    }

    return (
      <div className="todo-header">
        <input type="text" onKeyUp={(e)=>{
          changeTodo(e)
        }} onChange={(e)=>{
          setTodoName(e.target.value.trim())
          
          
        }}/>
      </div>
    )
  
}

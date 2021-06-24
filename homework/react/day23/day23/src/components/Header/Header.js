import React, { Component ,useState} from 'react'
import './Header.css'
export default function Header (props) {

const[todoName,setTodoName]=useState("")




    const [todoName, setTodoName] = useState('')
    function changeTodoName(e) {
      setTodoName(e.target.value.trim())
    }
    function key(e) {
      if(e.keyCode===13){
        if(!todoName)return
        props.getTodoName(todoName)
        setTodoName('')
      }
     
    }
    
    return (
      <div className="todo-header">
        <input type="text"
        value={todoName}
        onChange={changeTodoName}
        onKeyUp={key} />
      </div>
    )
  
}

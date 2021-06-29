import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state={
    todoName:""
  }
  
fn=(e)=>{
  this.setState({
    todoName:e.target.value.trim()
  })
}
update=(e)=>{
  if(e.keyCode===13){
    if(!this.state.todoName){return}
    this.props.updateTodo(this.state.todoName)
    this.setState({todoName:""})
    e.target.value=""
  }
}
  render() {
    return (
      <div className="todo-header">
        <input type="text" onChange={this.fn} onKeyUp={this.update}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" checked={this.props.item.isDone} onChange={()=>{
            this.props.updateId(this.props.item.id)
          }}/>
          <span className={this.props.item.isDone?"active":""}>{this.props.item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={()=>{this.props.deleteOne(this.props.item.id)}}>删除</button>
      </li>
    )
  }
}

import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
 
  render() {
    let {list}=this.props
    console.log(list)
    const all=list.length
    const done=list.filter((item)=>item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={()=>{this.props.changeDone()}}/>
        </label>
        <span>
          <span>已完成 {done}</span> / 全部 {all}
        </span>
        <button className="btn btn-danger" onClick={()=>{
          this.props.allDelete()
        }}>清除已完成任务</button>
      </div>
    )
  }
}

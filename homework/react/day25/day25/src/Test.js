import React, { Component } from 'react'
import ReactDOM from "react-dom"
export default class Test extends Component {
  constructor(){
    super()
    this.container=document.createElement("div")
  }
  componentDidMount() {
    document.getElementById("test").appendChild(this.container)
  }
  
  render() {
    let node=<div>{"test在這裏"}</div>
    return ReactDOM.createPortal(node,this.container)
  }
}

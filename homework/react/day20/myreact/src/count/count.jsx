import React from "react"
import "./count.css"

export default class Count extends React.Component{
    constructor(){
        super()
        this.state={count:0}
      
    }
    render(){
       
        return <div>
            <div>{this.state.count}</div>
            <button className="add" onClick={()=>{
                this.setState({count:this.state.count+1})
            }}>+</button>{/*由于jsx需要经过 babel编译后运行，事件处理函数解析位普通函数，因此函数的this指向undefined，一般要将this指向react组件的实例*/}
            <button className="min" onClick={this.fn}>-</button>
        </div>
    }
    fn=()=>{ this.setState({count:this.state.count-1})}
}
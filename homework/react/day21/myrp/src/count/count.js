import React from "react"
import "./index.css"

export default class Count extends React.Component{
    state = { count: 0 }
    render(){
        return <div>
            <div>{this.state.count}</div>
            <button className="add" onClick={this.fn}>+</button>
        </div>
    }

    fn=()=>{
        this.setState({count:this.state.count+1})
    }
}
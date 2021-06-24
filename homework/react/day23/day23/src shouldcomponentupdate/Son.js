import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
    state={name:"ls"}

    shouldComponentUpdate(props,state){
        // return this.props.name!==this.state.name
        console.log(state.name)
        console.log(this.state.name)
        return state.name!==this.state.name
       
    }
    render() {
        console.log("son渲染了")
        
        return (
            <div>
               <button onClick={()=>{
                   this.setState({name:"zl"})
                   
                    console.log(this.state.name)
               }}></button>
            </div>
        )
    }
}

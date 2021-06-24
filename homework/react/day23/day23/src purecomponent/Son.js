import React, { Component ,PureComponent} from 'react'
import PubSub from 'pubsub-js'
export default class Son extends PureComponent {
    state={name:"ls"}

    
       
    
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

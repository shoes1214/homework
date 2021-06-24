import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
    render() {
        let token=PubSub.subscribe("name",(topic,data)=>{
            console.log(data)
        })
        return (
            <div>
                <button onClick={()=>{
                    // PubSub.unsubscribe(token)
                    //  PubSub.unsubscribe("name")
                    // PubSub.clearAllSubscriptions()
                }}></button>
            </div>
        )
    }
}

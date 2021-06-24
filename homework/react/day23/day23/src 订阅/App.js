import React, { Component } from 'react'
import PubSub from "pubsub-js"
import Far from "./Far"
export default class App extends Component {
    state={name:"zs"}
    render() {
        return (
            <div>
                <Far></Far>
                <button onClick={()=>{
                    PubSub.publish("name",this.state.name)
                }}></button>
            </div>
        )
    }
}

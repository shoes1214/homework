import React, { Component } from 'react'
import Son from "./Son"
export default class Far extends Component {
    state={name:"zs"}
    render() {
        return (
            <div>
                <Son name={this.state.name}></Son>
            </div>
        )
    }
}

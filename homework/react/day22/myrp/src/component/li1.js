import React, { Component } from 'react'

export default class Li1 extends Component {
    render() {
        return (
            <div onClick={()=>{
                this.props.fn(this.props.value)
            }}>
                {this.props.value}
            </div>
        )
    }
}

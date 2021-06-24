import React, { Component } from 'react'

export default class Position extends Component {
    state={
        x:0,
        y:0
    }

    fn=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }

    componentDidMount() {
        window.addEventListener("mousemove",this.fn)
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove",this.fn)
    }
    
    

    render() {

        return this.props.render(this.state)
    }
}

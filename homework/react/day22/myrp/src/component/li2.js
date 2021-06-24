import React, { Component } from 'react'

export default class Li2 extends Component {
    state={name:this.props.name,ischecked:this.props.ischecked}

    fn=(sv)=>{
        return (e)=>{
            let value=e.target.type==="checkbox"?e.target.checked:e.target.value
            this.setState({[sv]:value})
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.fn("name"),this.props.fn1(this.state)}/>
                <input type="checkbox" onChange={this.fn("ischecked"),this.props.fn1}/>
            </div>
        )
    }
}

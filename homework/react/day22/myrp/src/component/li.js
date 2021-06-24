import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class Li extends Component {
    static propTypes={
        sum:PropTypes.array.isRequired
    }
    static defaultProps={
        sum:["应该传一个数组"]
    }
    state={list:[4,5,6]}
    render() {
        return (
            <div onClick={()=>this.props.fn(this.state.list)}>
                <ul>
                    {this.props.value.map((item)=>{
                        return <li key={item}>
                            {item}
                        </li>
                    })}
                </ul>
                <ul>
                    {this.props.sum.map((item)=>{
                        return <li key={item}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Position from './Position'
import Cat from "./Cat"
import Mouse from "./Mouse"


export default class App extends Component {
   
    
    render() {
        return <>
        <Position render={(data)=><Cat data={data}></Cat>}></Position>
        <Position render={(data)=><Mouse data={data}></Mouse>}></Position>
        </>
    }
}

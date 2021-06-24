import React, { Component } from 'react'
import usePosition from './usePosition'
import MouseUrl from './assets/mouse.gif'
export default function Mouse () {

  
        let {x,y}=usePosition()
        return (
            <div>
                <img src={MouseUrl} alt=""  style={{ position: 'absolute', left: x, top: y, width: 100 }}/>
            </div>
        )
    
}
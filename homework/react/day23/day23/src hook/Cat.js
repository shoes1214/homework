
import React, { Component } from 'react'
import usePosition from './usePosition'
import CatUrl from './assets/cat.gif'

export default function Cat () {
  let { x, y } =usePosition()
    // let { x, y } = this.props.data
    x += 200
    y -= 150
    return <div>
        <img
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    
  
}
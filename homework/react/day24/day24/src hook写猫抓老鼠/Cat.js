
import React, { Component ,useState,useEffect} from 'react'
import CatUrl from './assets/cat.gif'

export default function Cat () {
  let [x,setX]=useState(0)
  let [y,setY]=useState(0)

useEffect(()=>{
  window.addEventListener("mousemove",fn)

  return()=>{window.removeEventListener("mousemove",fn)}
},[])
    
function fn(e){
  setX(e.clientX)
  setY(e.clientY)
}

    x += 200
    y -= 150
    return (
      <div>
        <img
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  
}
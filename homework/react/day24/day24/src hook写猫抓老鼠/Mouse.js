import React, { Component ,useState,useEffect} from 'react'
import MouseUrl from './assets/mouse.gif'
export default function Mouse () {

   
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
      
        
        return (
            <div>
                <img src={MouseUrl} alt=""  style={{ position: 'absolute', left: x, top: y, width: 100 }}/>
            </div>
        )
    
}
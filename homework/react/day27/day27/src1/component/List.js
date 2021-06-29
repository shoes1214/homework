import React from 'react'

export default function List(props) {
    
    return (
        <div>
           {props.count}
           <button onClick={()=>{
               props.addNum()
           }}>按钮</button>
        </div>
    )
}

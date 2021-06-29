import React from 'react'

export default function List(props) {
    console.log(props)
    return (
        <div>
            <button onClick={()=>{
                props.addAsync()
            }}>按钮</button>
            <ul>
                {props.list.map((item,index)=>{
                    return <li key={index}>
                        <h2>{item.name}</h2>
                        <h2>{item.age}</h2>
                    </li>
                })}
                 {props.list.map((item,index)=>{
                    return <li key={index}>
                        <h2>name{item.name}</h2>
                        <h2>age{item.age}</h2>
                    </li>
                })}
            </ul>
        </div>
    )
}

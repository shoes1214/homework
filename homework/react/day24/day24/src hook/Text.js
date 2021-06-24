import React ,{useState,useEffect} from 'react'
export default function Text() {
    const [count,setCount]=useState(0)
    return (
        <div>
            {count}
            <button onClick={()=>{
                setCount(count+1)
            }}>按钮</button>
        </div>
    )
}

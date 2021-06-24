import React ,{useState,useEffect} from 'react'
import Text from "./Text.js"
import Text1 from "./Text1.js"
export default function App() {
    const [con,setCon]=useState(1)
    

    return (
        <div>
            <button onClick={()=>{
                setCon(con+1)
            }}>app按钮</button>
            <Text></Text>
            {con===1&&<Text1 con={con}></Text1>}
        </div>
    )
}

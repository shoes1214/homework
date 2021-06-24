import React ,{useState,useEffect} from 'react'

export default function Text1(props) {

    // useEffect(()=>{
    //     console.log("effect挂载或更新了")
    // })
    // useEffect(()=>{
    //     console.log("effect挂载了")
    // },[])
    useEffect(()=>{
        console.log("effect挂载或更新了")
        return ()=>{console.log("effect卸载了")}
    },[props.con])

    return (
        <div>
            
        </div>
    )
}

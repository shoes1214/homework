import { useEffect,useState } from "react";

export default function usePosition(){

const [x,setX]=useState(0)
const [y,setY]=useState(0)

useEffect(()=>{
    window.addEventListener("mousemove",usePositionHandle)

    return ()=>{
        window.removeEventListener("mousemove",usePositionHandle)
    }
},[])

function usePositionHandle(e){
    setX(e.clientX)
    setY(e.clientY)
}

return {x,y}

}
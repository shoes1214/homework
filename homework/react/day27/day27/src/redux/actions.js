import {ADD} from "./containts"
import axios from "axios"
function add(data){
    console.log("data",data)
    return {type:ADD,data}
}
function addAsync(){
    return async(dispatch)=>{
        let result=await axios({
            method:"get",
            url:"http://127.0.0.1:5000/test"
        })
        dispatch(add(result.data))
        console.log("result",result)
    }
}
export{addAsync}
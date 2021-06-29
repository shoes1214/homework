import axios from "axios"
function addList(data){
    return {type:"ADD",data}
}

function addListAsync(){
    return async(dispatch)=>{
        let result=await axios({
            method:"get",
            url:"http://127.0.0.1:5000/test"
        })
        dispatch(addList(result.data))
    }
    
}
export {addListAsync}
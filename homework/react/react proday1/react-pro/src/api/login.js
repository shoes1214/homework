import axios from "axios"
export const loginCode=(phone,code)=>{
    return axios({
        method:"POST",
        url:"/api/login/phone",
        data:{
            phone,code
        }

    })
}
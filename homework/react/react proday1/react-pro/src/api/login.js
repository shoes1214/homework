import axios from "axios"
// 发送验证码
export const loginCode=(phone,code)=>{
    return axios({
        method:"POST",
        url:"/api/login/phone",
        data:{
            phone,code
        }

    })
}
// 获取用户信息
export const getUser=()=>{
    return axios({
        method:"GET",
        url:"/api/user"
    })
}
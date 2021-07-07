import axios from "axios";
// 定义registerCode的异步请求函数,发送验证码
export const registerCode=(phone)=>{
    return axios({
        method:"POST",
        data:{
            phone
        },
        url:"/api/login/digits"
    })
}
// 手机号是否注册了
export const phoneNum=(phone)=>{
    return axios({
        method:"POST",
        data:{
            phone
        },
        url:"/api/regist/verify_phone"
    })
}
// 手机号验证码是否正确
export const checkCode=(phone,code)=>{
    return axios({
        method:"POST",
        data:{
            phone,code
        },
        url:"/api/regist/verify_code"
    })
}
// 注册
export const register=(phone,password)=>{
    return axios({
        method:"POST",
        data:{
            phone,password
        },
        url:"/api/regist/user"
    })
}
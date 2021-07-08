import axios from "axios"
/* 
使用axios发送ajax请求
*/
export default function (){
    return axios({
        method:"GET",//请求方式
        url:"/api/common/countryData",//请求地址（将api拼接在前面，经过http-proxy-middleware会自动把它去掉）
    })
}

import React from 'react'
import { Redirect } from 'react-router-dom'
/* 
1.若不是登录进去主页的（没有location.state）跳转到/login/code
*/
// 结构props的写法
export default function Home({location}) {
    if(!location.state){
        return <Redirect to="/login/code"></Redirect>
    }
    let src=location.state.avatar
    return (
        <div>
            <h1>{location.state.username}</h1>
            <img src={src} alt="" />
        </div>
    )
}

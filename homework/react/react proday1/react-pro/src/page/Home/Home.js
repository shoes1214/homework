import React ,{useState}from 'react'
import { Redirect } from 'react-router-dom'
import {getUser} from "../../api/login"
/* 
1.若不是登录进去主页的（没有location.state,也没有document.cookie）跳转到/login/code
2.若为第三方登录，发送请求获取数据，由于视图渲染用到数据，因此需要状态管理
3.其他情况，用react路由传递的数据渲染页面
*/
// 结构props的写法
export default function Home({location}) {
    let [name,setName]=useState("")
    let [src,setSrc]=useState("")
    if(!location.state&&!document.cookie){
        return <Redirect to="/login/code"></Redirect>
    }else if(document.cookie){
        // 第三方登录会生成cookie，通过请求从服务器拿到第三方服务器发送过来的数据
        async function fn(){
            let re=await getUser()
            setName(re.data.data.nickName)
            setSrc(re.data.data.avatar)
        }
        fn()     
        return(<div>
            <h1>{name}</h1>
            <img src={src} alt="" />
        </div>)
    }else{
        // 其他情况为只有location.state，通过react路由传过来的数据渲染页面
        setName(location.state.userName)
        setSrc(location.state.avatar)
        return (
            <div>
                <h1>{name}</h1>
                <img src={src} alt="" />
            </div>
        )
    }
       
   
   
}

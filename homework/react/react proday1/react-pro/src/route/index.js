import { lazy } from "react"
// 引入lazy使路由加载时使用懒加载

let LoginCode=lazy(()=>import("../page/LoginCode/LoginCode"))

let LoginPassword =lazy(()=>import("../page/LoginPassword/LoginPassword"))
let RegisterCode =lazy(()=>import( "../page/RegisterCode/RegisterCode"))
let RegisterPassword =lazy(()=>import( "../page/RegisterPassword/RegisterPassword"))
let RegisterPhone =lazy(()=>import( "../page/RegisterPhone/RegisterPhone"))
let Country =lazy(()=>import( "../component/country"))
let Home =lazy(()=>import( "../page/Home/Home"))

const routes = [
  { path: '/', component: Home },
  { path: '/login/code', component: LoginCode },
  { path: '/login/password', component: LoginPassword },
  { path: '/register/phone', component: RegisterPhone },
  { path: '/register/code', component: RegisterCode },
  { path: '/register/password', component: RegisterPassword },
  { path: '/country', component: Country },
  
  
]

export default routes

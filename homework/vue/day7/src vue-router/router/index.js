
import Vue from "vue"
import VueRouter from "vue-router"

import Home from '../views/Home'
import About from "../views/About"
import Detail from "../views/About/Detail"

Vue.use(VueRouter)

export default new VueRouter({
  mode:"history",
  // mode设置路径模式，默认为hash
  // hash特点：兼容性好，带#
  // history特点：不带# 兼容性较差
  routes:[
    {path:"/home",name:'Home',component:Home},
    // 使用name属性 生成命名路由
    {path:"/about",component:About,children:[
      {path:"detail/:id",name:'Detail',props($route){return {...$route.query,...$route.params}},component:Detail}
      // path前面不加/ 会自动补全 props函数设置了父子组件的传值，返回一个对象（解构后的对象）
    ]},
  ]
})
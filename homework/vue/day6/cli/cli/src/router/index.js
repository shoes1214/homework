import Vue from "vue"
import VueRouter from "vue-router"
// 1.引入

import Home from "../views/Home"
import About from "../views/About"
import Detail from "../views/About/Detail"
import Message from "../views/About/Message"
import News from "../views/About/Detail/News"
// router文件夹中的index.js为前端路由的配置文件
// 2.安装vue路由
// 会给全局注册两个组件 router-link router-view
Vue.use(VueRouter)

// 3.配置路由并导出
// 配置对象中有名为routes的路由配置对象，是一个数组
const router=new VueRouter({
routes:[
  {path:"/home",component:Home},
  {path:"/about",component:About,
  // children属性是一个数组，存放当前组件的子组件的路由配置信息,children 中的path可以简写,
children:[{path:"message",component:Message},{path:"/about/detail",component:Detail,children:[{
  // :id表示后面可以为任意值
  path:"news/:id",component:News
}]}]},
  // 将path设置为""或"*",即当其他的path没匹配到，就匹配这个对象里的组件
   {path:"",component:Home},
  
]
})

export default router
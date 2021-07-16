import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import About from "../views/About"
import Home1 from "../views/Home/Home1"
Vue.use(VueRouter)
// vue-router使用：1引入 2安装 3配置 4.main.js的配置对象中使用
// vue-router提供两个api router-link 和 router-view
// router间的通信 子组件中this.$route.params 获取
// vue-router配置对象，需要配置routes（数组），以对象的形式配置路由
const router=new VueRouter({routes:[
  {path:"/home",component:Home,children:[
    {path:"/home/:id",component:Home1},
    
  ]},
  {path:"/about",component:About},
  {path:"",component:Home},
]
})

export default router
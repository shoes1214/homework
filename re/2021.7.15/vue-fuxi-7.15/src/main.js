import Vue from "vue"
import App from "./App.vue"
import router from "./router"

// 全局事件总件
Vue.config.productionTip=false

new Vue({
  router,
  // 配置对象属性el：之用一次，在入口文件使用，指定渲染的位置
  el:"#app",
  render:h=>h(App)
})
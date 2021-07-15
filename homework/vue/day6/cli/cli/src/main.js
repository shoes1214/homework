import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// 配置对象需要引入main.js，在vue的配置对象中应用路由配置对象


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from "vue"
import App from "./App.vue"

// 全局事件总件
Vue.config.productionTip=false

new Vue({
  beforeCreate(){
    // 给vue的原型添加一个属性，属性的值为当前vue实例，通过这个属性就能既操作vue原型的方法，又能使自定义事件添加到同个对象上
    Vue.prototype.$bus=this
  },
  // 配置对象属性el：之用一次，在入口文件使用，指定渲染的位置
  el:"#app",
  render:h=>h(App)
})
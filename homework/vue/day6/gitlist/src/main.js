import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 设置全局事件总件
new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
}).$mount('#app')

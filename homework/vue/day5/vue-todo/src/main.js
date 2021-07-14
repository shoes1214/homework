import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./style/common.css"
/* 
1.拆分组件
2.组件的结构和样式
3.功能实现（crud）
*/
new Vue({
  beforeCreate(){
    // 使用全局事件总件的方式传递数据
    Vue.prototype.$bus=this
  },

  render: h => h(App),
}).$mount('#app')

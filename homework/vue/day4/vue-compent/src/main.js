import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// main.js是入口文件
// $mount("#app")同el:"#App"
new Vue({
  render: h => h(App),
}).$mount('#app')

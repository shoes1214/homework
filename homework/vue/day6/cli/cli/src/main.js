import Vue from 'vue'
// import ElementUI from 'element-ui'

import App from './App.vue'

// 使用ElementUI：1.安装依赖 2.引包 3.引入样式 4.安装

Vue.config.productionTip = false
// 完整引入
// Vue.use(ElementUI)
// 按需引入
// 按需引入步骤：1.安装依赖 babel-plugin-component 2.创建配置文件element.js 3.main.js引入配置文件（就可以不用引和安装elelment-ui,css文件还得保留）

new Vue({
  render: h => h(App),
}).$mount('#app')

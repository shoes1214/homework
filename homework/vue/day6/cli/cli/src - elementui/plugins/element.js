import Vue from "vue"
// 按需加载
import {Button, Message, Dialog} from "element-ui"
// 安装
Vue.use(Button)
Vue.use(Dialog)

// 有些组件的使用是给原型扩展属性的方式，查看文档就可以知道是哪些
Vue.prototype.$message = Message;

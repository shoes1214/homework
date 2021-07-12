<template>
<!-- 写布局，要有根标签 -->
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :add="add"></Add>
      <Show :compents="compents" :del="del" v-show="compents.length"></Show>
      <!-- 使用v-bind方式，将数据传递给子组件 -->
      <!-- 需求4：数组为空时展示其他内容 -->
      <h2 v-show="!compents.length">暂无评论，点击左侧添加评论！！！</h2>
  </div>
  </div>
</template>

<script>
// 导入组件
import Add from "./views/Add"
import Show from "./views/Show"

// 导出配置对象
/* 
使用props实现组件间的通信，需要将使用的数据定义在共同的父级

*/
export default {
name:"App",
// 注册组件
components: {
  Add,Show
},
data(){
  return {
    compents:[{id:1,username:"zs",compent:"vue好用"},
    {id:2,username:"ls",compent:"jquery好用"}
    ]
  }
},
methods:{
  // 往数组添加新对象
  add(username,compent){
    this.compents.unshift({username,compent})
  },
  // 根据id删除Li，使用filter返回新数组
  del(id){
    this.compents=this.compents.filter(item=>item.id!==id)
  }
}
}
</script>

<style>
/* 写样式 */
</style>
<template>
  <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        
        <ul class="list-group">
         <Li v-for="compent in compents" :key="compent.key" :compent=compent :del="del"></Li>
         <!-- 1 key需要唯一标识  2 将compent对象传到子组件 3.del方法逐级传递-->
        </ul>
      </div>
   
</template>

<script>
import Li from "./Li"
/* 
需求1：列表渲染，crud操作一般先实现 查 的功能，方便其他功能的演示
*/
export default {
name:"Show",
components: {
  Li
},
props:{
  // props对象,用来接收父组件传递的数据,写成 传递数据名：数据类型
  compents:Array,
  del:Function
}
}
</script>

<style  scoped>
.reply {
  margin-top: 0px;
}


</style>
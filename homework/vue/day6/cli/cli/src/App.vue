<template>
  <div>
    <A>
      <p>{{con}}</p>
      <button @click="con++">+</button>
    </A>
    <hr>
    <B>
      <template v-slot:header>
          <p>B-header</p>
      </template>
      <p>B-main</p>
      <!-- v-slot简写为# -->
      <template #footer>
          <p>B-footer</p>
      </template>
    </B>
    <hr>
    <C>
      <template v-slot:header="obj">
        <!-- 父组件接收到的数据是一个对象 -->
          <p>C-header {{obj.sex}}</p>
      </template>
      <p>C-main</p>
      <!-- v-slot简写为# -->
      <template #footer={age}>
        <!-- 可以在接收时解构 -->
          <p>C-footer {{age}}</p>
      </template>
    </C>
  </div>
</template>

<script>
import A from "./views/A"
import B from "./views/B"
import C from "./views/C"
/* 
插槽：作用：父组件向子组件传递带数据的标签
默认插槽：见A 直接将标签传给子组件
命名插槽：见B 使用template标签将传递的内容拆分，使用v-slot给template命名
作用域插槽：见C 子组件传递数据给父组件，父组件通过v-slot接收
*/
export default {
name:"App",
data(){
  return{
    con:1
  }
},
components:{
  A,B,C
}
}
</script>

<style>

</style>
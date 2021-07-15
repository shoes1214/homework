<template>
  <div>
    <slot name="header" :sex="sex"></slot>
    <!-- 使用v-bind方式传递数据给父组件 -->
    <p>CCCC</p>
     <slot></slot>
    <slot name="footer" :age="age"></slot>
  </div>
</template>

<script>
export default {
name:"C",
data(){
  return{
    age:18,
    sex:"man"
  }
}
}
</script>

<style>

</style>
<template>
  <div>
   <!-- slot标签中有name的为命名插槽 -->
    <slot name="header"></slot>
    <p>BBBB</p>
     <!-- 子组件中使用slot只能接收到默认插槽的内容 -->
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
name:"B"
}
</script>

<style>

</style>
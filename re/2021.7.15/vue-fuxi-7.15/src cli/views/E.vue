<template>
  <div>
    ...命名插槽
    <!-- 具名插槽在slot使用name属性来决定渲染位置 -->
    <slot name="head"></slot>
    <slot></slot>
    <slot name="foot"></slot>
  </div>
</template>

<script>
export default {
name:"E"
}
</script>

<style>

</style>
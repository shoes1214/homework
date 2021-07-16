<template>
  <div>
    ...props
    <div>{{con}}</div>
  </div>
</template>

<script>
export default {
  // props在子组件的使用,props会进行数据代理
name:"A",
// 1.props属性的3种用法
// 1.1 使用数组的形式接收
// props:["con"],
// 1.2 以对象接收,键为接收的变量名,值为接收的数据类型（常用）
// props:{
//   con:Number
// },
// 1.3 以对象接收,接收的值写为配置对象
props:{
con:{
  type:Number,
  required:true
}
}
}
</script>

<style>

</style>
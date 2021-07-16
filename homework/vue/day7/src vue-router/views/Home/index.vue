<template>
  <div>home</div>
</template>

<script>
export default {
name:"Home",
// 使用缓存的组件有两个生命周期：只有被keep-alive缓存的组件生效activated（激活）和deactivated（未激活）
mounted(){
  console.log("home mounted")
},
beforeDestroy(){
  console.log("home beforedestroy")
},
activated(){
  console.log("home activated")
},
deactivated(){
  console.log("home deactivated")
},
}

</script>

<style>

</style>
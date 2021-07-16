<template>
   <div>
     ...自定义事件
  <div>son{{son}}</div>
   </div>
</template>

<script>
// 自定义事件在子组件的使用
// this.$emit调用事件
export default {
mounted () {
  this.$emit("getSon",this.son)
  this.$bus.$on("setbro",this.setbro)
},
beforeDestroy () {
  this.$bus.$off("setbro",this.setbro)
},
name:"B",
data(){
  return{
    son:1
  }
},methods:{
  setbro(bro){
    this.son=bro
  }
}
}
</script>

<style>

</style>
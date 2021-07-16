<template>
  <div>
    作用域插槽...
    <slot name="head" :number="number"></slot>
  </div>
</template>

<script>
export default {
name:"F",
data(){
  return{
    number:1
  }
},
methods:{
  
}
}
</script>

<style>

</style>
<template>
  <div>
    <h1>News</h1>
    <p>news{{this.$route.params.id}}</p>
  </div>
</template>

<script>
export default {
mounted(){
  // this.$route
  console.log(this.$route)
},
name:"News",

}
</script>

<style>

</style>
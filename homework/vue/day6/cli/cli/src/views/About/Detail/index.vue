<template>
  <div>
    <h1>Detail</h1>
  <ul>
    <li v-for="New in News" :key=New.id><router-link :to="'/about/detail/news/'+New.id">{{New.content}}</router-link></li>
  </ul>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
name:"Detail",
data () {
  return {
    News:[],
    
  }
},
mounted(){
  setTimeout(()=>{
    this.News=[
      {id:1,content:"News1"},
      {id:3,content:"News3"},
      {id:5,content:"News5"},
      ]
  },1000)
}
}
</script>

<style>

</style>
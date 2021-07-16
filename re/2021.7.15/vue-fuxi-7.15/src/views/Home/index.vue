<template>
  <div>
    ...home
    <ul>
      <li v-for="li in lis" :key="li.id">
        <router-link :to="`/Home/${li.id}`">{{li.id}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
mounted () {
  this.lis=[{id:1},{id:3},{id:5}]
},
name:"Home",
data(){
  return{
 lis:[]
}
},
}

</script>

<style>

</style>
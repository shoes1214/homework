<template>
  <div class="container">
    <Search></Search>
    <List></List>
    
  </div>
</template>

<script>
// 1.拆分组件
// 2.组件的结构样式
// 3.实现功能
import List from "./List"
import Search from "./Search"
export default {
name:"App",
components:{
  List,Search
}
}
</script>

<style>

</style>
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    List,
  },
  
  
  
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
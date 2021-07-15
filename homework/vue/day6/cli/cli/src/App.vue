<template>
  <div class="container">
    <h1>vue-router</h1>
    <div class="row">
      <div class="col-md-4">
        <ul class="nav nav-pills nav-stacked">
          <!-- router-link 负责切换地址  to属性可以设置跳转的地址值 -->
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li><router-link to="/home">Home</router-link></li>
        </ul>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from "./views/Home"
// import About from "./views/About"
// 1.下载包vue-router 2.配置vue-router 3.main.js应用vue-router配置文件
export default {
  name: "App",
  data() {
    return {
      con: 1,
    };
  },
  // components:{
  //   Home,About
  // }
};
</script>

<style>
.router-link-active {
  color: #fff !important;
  background-color: orange !important;
}
</style>
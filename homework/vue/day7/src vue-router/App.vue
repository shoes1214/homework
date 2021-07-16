<template>
  <div>
    App...
    <router-link :to="{name:'Home'}">home</router-link>
    <router-link to="/about">about</router-link>
    <hr>
    <!-- 使用缓存  使用keep-alive  include表示哪些组件使用缓存  exclude表示哪些不用缓存 -->
    <keep-alive include="Home">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
name:"App"
}
</script>

<style>

</style>
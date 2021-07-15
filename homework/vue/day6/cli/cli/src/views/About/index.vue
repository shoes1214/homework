<template>
  <div>
    <h1>About...</h1>
    <ul class="nav nav-tabs">
      <li><router-link to="/about/detail">detail</router-link></li>
      <li><router-link to="/about/message">message</router-link></li>
    </ul>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
name:"About"
}
</script>

<style>

</style>
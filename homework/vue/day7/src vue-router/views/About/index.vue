<template>
  <div>
    about
    <!-- <router-link :to="`/about/detail/${id}?age=${person.age}&sex=${person.sex}`">detail</router-link> -->
    <!-- 第三种方式 在router-link标签设置传递的参数 -->
    <router-link :to="{name:'Detail',query:{age:person.age,sex:person.sex},params:{id:3}}">detail</router-link>
    <!-- <button @click="$router.history.push('/about/detail/1')">re</button> -->
    <!-- 编程式导航 -->
    <button @click="fn">re</button>
    <!-- $router.history.go控制访问地址的前进回退 -->
    <button @click="$router.history.go(-1)">-1</button>
    <hr />
    <router-view :id="id"></router-view>
    <!-- 除了设置props函数外，还可以直接给router-view传值 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return { id: 2,
    person:{
      age:18,
      sex:"man"
    }
    };
  },
  methods:{
    fn(){
      this.$router.history.push({
        // 编程式导航
        name:"Detail",
        query:{age:this.person.age,sex:this.person.sex},params:{id:4}
      })
    }
  },
  mounted(){
  console.log("about mounted")
},
beforeDestroy(){
  console.log("about beforedestroy")
},
activated(){
  console.log("about activated")
},
deactivated(){
  console.log("about deactivated")
},
};
</script>

<style>
</style>
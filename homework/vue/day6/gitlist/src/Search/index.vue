<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="userName"/>
        <button @click="handle">Search</button>
      </div>
    </section>
</template>

<script>
// 需求：点击搜索发送请求(使用axios)
// 1引入axios
import axios from "axios"
export default {
name:"Search",
// 2定义data用户名，双向绑定输入框
data(){
  return{
    userName:""
  }
},
// 3.设置点击事件
methods:{
  // 4.发现需要修改List中的loading状态，实现兄弟间通信，要设置全局事件总件
async handle(){
this.$bus.$emit("changeLoad",true)
// 搜索结果返回前先将loading状态改为true
const userName=this.userName.trim()

if(!userName){
  alert("请输入内容")
  return
}
 let re=await axios({
  methods:"GET",
  url:"https://api.github.com/search/users",
  params:{
    q:userName
  }
})
// 使用map生成一个包含用户名，id，头像，链接的对象组成的数组，其他属性不需要
let users=re.data.items.map(item=> ({avatar_url:item.avatar_url,id:item.id,login:item.login,url:item.html_url}))

this.$bus.$emit("updateUser",users)
this.$bus.$emit("changeLoad",false)
this.userName=""
}
}
}

</script>

<style>

</style>
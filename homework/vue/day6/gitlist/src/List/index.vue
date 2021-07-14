<template>
<div>
 <h1 v-if="loading">loading...</h1>
 <!-- 由于user是个对象，隐式转行为true，因此使用长度来决定显示隐藏 -->
  <div class="row" v-else-if="users.length">
      <div class="card" v-for="user in users" :key=user.id>
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      
    </div>
    <h1 v-else>暂无内容</h1>
    </div>
</template>

<script>
// 需求1：初始的用户界面显示提示，搜索时展示一个提示，当有展示内容时不需要提示
// 实现：使用v-if v-else-if v-else实现
// 需求2：使用全局事件总件改变List的loading和users
export default {
name:"List",
data(){
  return{
    users:[],
    // 需要列表渲染的用户数据
    loading:false,
    // 定义一个状态，改变loading的显示隐藏
  }
},
methods:{
  changeLoad(load){
this.loading=load
  },
  updateUser(users){
    this.users=users
  }
},
mounted(){
this.$bus.$on("changeLoad",this.changeLoad)
this.$bus.$on("updateUser",this.updateUser)
},
beforeDestroy(){
this.$bus.$off("changeLoad",this.changeLoad)
this.$bus.$off("users",this.users)
},
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
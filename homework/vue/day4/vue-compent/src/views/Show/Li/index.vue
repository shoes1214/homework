<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="handleDel">删除</a>
    </div>
    <p class="user"><span>{{compent.username}}</span><span>说:</span></p>
    <p class="centence">{{compent.compent}}</p>
  </li>
</template>

<script>
// 需求3：删除一条Li
export default {
  name: "Li",
  props:{
    compent:Object,
    del:Function
  },methods:{
    handleDel(){
      // 删除前询问
      if(confirm("确认删除评论？")){
        // 点击确定删除
        this.del(this.compent.id)
      }
    }
  }
};
</script>

<style>
li {
  transition: .5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
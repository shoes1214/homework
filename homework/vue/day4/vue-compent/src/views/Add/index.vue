<template>
  <div class="col-md-4">
    <!-- 阻止submit默认事件，submit默认事件会发送get请求 -->
        <form class="form-horizontal" @submit.prevent="handleclick">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="compent"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
// 需求2：添加功能
// 实现添加功能：由于props传递的数据不能修改，因此要修改App中data的数据需要App传递一个函数
export default {
  // 返回配置对象
  // name属性，定义组件的名字
name:"Add",
data(){
  return {
    // 由于两个输入框的值为响应式的，因此使用data保存
    username:"",
    compent:""
  }
},
props:{
  add:Function
},
methods:{
  handleclick(){
    // 若输入框有一个为空，弹窗提醒
    if(!this.username||!this.compent){
      alert("请输入内容")
      return
    }
    // 将输入的内容生成一条新的评论
    this.add(this.username,this.compent)
    // 清空输入框
    this.username=''
    this.compent=""
  }
}
}
</script>

<style  scoped>
  
</style>

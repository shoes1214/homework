<template>
  <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.13="handle" v-model="todoName"/>
      </div>
</template>

<script>
// 实现完展示功能，一般是从上到下，从左向右写功能，防止漏写
// 需求：输入框输入，按下回车键生成新todo
export default {
name:"Header",
data(){
return {
  todoName:""
}
},
methods: {
  handle(){
    this.todoName=this.todoName.trim()
    if(!this.todoName){
      alert("请输入内容")
      return
    }
    this.$bus.$emit("createTodo",this.todoName)
    this.todoName=""
  }
}
}
</script>

<style>
.todo-header input {
  width: 100%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin-bottom: 10px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
<template>
  <li @mouseenter="isshow=true" @mouseleave="isshow=false">
    <label>
      <input type="checkbox" @click="$bus.$emit('changeDone',todo.id)" :checked="todo.isDone"/>
      <!-- $emit可以传第二个及后面参数，为函数的参数-->
      <span>{{todo.todoName}}</span>
    </label>
    <button class="btn btn-danger" v-show="isshow" @click="$bus.$emit('delTodo',todo.id)">删除</button>
  </li>
</template>

<script>
// 需求1：点击复选框改变完成状态
// 使用已经绑定的自定义方法changeDone，传入id
// 需求2：鼠标移入时展示删除按钮
// 使用响应式数据控制，通过鼠标移入移出事件触发，条件渲染按钮
// 需求3：点击删除按钮先询问，点击确定删除当前todo
export default {
  name: "Item",
  props:{
    todo:Object,
    
  },data(){
    return{
      isshow:false
    }
  },
};
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
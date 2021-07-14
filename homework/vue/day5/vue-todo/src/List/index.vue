<template>
  <ul class="todo-main">
    <Item v-for="todo in todos" :key="todo.id" :todo="todo" ></Item>
  </ul>
</template>

<script>
/* 
将数据定义在展示组件中，一般数据跟方法写在同个组件中
*/
import Item from "./Item";
export default {
  mounted() {
    // mounted中绑定自定义方法
    //  给原型一个改变isDone的方法
   
    this.$bus.$on("changeDone", this.changeDone);
    this.$bus.$on("createTodo", this.createTodo);
    this.$bus.$on("delTodo", this.delTodo);
    
    
  },
  beforeDestroy() {
    // beforeDestroy中解绑
    this.$bus.$off("changeDone", this.changeDone);
    this.$bus.$off("createTodo", this.createTodo);
    this.$bus.$off("delTodo", this.delTodo);
  },
  name: "List",
  components: {
    Item,
  },
 
  data() {
    return {
      todos: [
        { id: 1, todoName: "吃饭", isDone: true },
        { id: 2, todoName: "吃早饭", isDone: false },
        { id: 3, todoName: "吃午饭", isDone: true },
        { id: 4, todoName: "吃晚饭", isDone: true },
      ],
    };
  },
  
  computed: {
    // 使用计算属性得到已完成的值与全部todo
    All(){
      return this.todos.length
    },
    Done(){
      let arr=this.todos.filter(item=>item.isDone)
      return arr.length
    }
  },
  methods: {
    // 改变isDone的方法
    changeDone(id) {
      this.todos = this.todos.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      });
    },
    // 输入框回车新增todo
    createTodo(todoName) {
      this.todos.push({
        todoName,
        id: Date.now(),
        isDone: false,
      });
    },
    // 删除一条todo的方法
    delTodo(id) {
      this.todos = this.todos.filter((item) =>  item.id !== id);
    },
  },
};
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
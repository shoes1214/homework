<template>
  <div>
   {{ count }}
   {{oddOrEven}}
    <button @click="ADD(1)">+</button>
    <button @click="MIN(1)">-</button>
    <button @click="addasync(1)">odd+</button>
    <button @click="addodd(1)">async+</button>
  </div>
</template>

<script>
import {mapActions,mapState,mapGetters,mapMutations} from "vuex"
//  映射到计算属性中：
//     mapState 
//       将vuex的state数据映射到组件内
//       将来可以通过this直接操作数据
//     mapGetters
//       将vuex的getters数据映射到组件内
//       将来可以通过this直接操作数据

//   映射到methods中：
//     mapActions
//       将vuex的actions映射到组件内
//       将来可以通过this直接调用actions
//     mapMutations
//       将vuex的mutations映射到组件内
//       将来可以通过this直接调用mutations
export default {
name:"App",
computed:{
  ...mapState(['count']),
  // mapState是一个函数，返回一个对象
  ...mapGetters(['oddOrEven'])
},
methods:{
  ...mapActions(['addasync','addodd']),
  ...mapMutations(['ADD','MIN'])
}
}
</script>

<style>

</style>
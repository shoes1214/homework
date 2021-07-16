/* 
vuex使用，1.下包 npm i vuex 2.创建一个store文件夹 3.配置vuex暴露出去 4.main.js使用store
*/
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// state,保存状态
const state = {
  count: 1,
};

// actions 间接操作数据，一般用来发送请求
// actions中的函数的第一个参数较其他api为特殊，为context，context包含了store的所有属性,在action中使用commit调用mutations中的方法
const actions = {
  addasync(context, num) {
    setTimeout(() => {
      context.commit("ADD", num);
    }, 1000);
  },
  addodd(store, num) {
    if (store.state.count & 1) {
      store.commit("ADD", num);
    }
  },
};
// mutations 直接操作state中的数据 第一个参数为store
const mutations = {
  ADD(state, num) {
    state.count += num;
  },
  // 函数接收两个参数，第一个为state，第二个是自定义参数，若自定义参数超过2个，会以对象保存
  MIN(state, num) {
    state.count -= num;
  },
};
// getters 只读的计算属性 第一个参数为store
const getters = {
  oddOrEven( state ) {
    return (state.count & 1) ? "奇数" : "偶数";
  },
};

// vuex的配置使用Vuex.Store
export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations,
});

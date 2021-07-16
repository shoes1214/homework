<template>
  <!-- template在vue脚手架中以标签形式展示，标签中写结构，可以写html标签，也可以写组件，注意必须有且只有一个根标签 -->
  <div>
    <input type="text" v-model="con" />
    <!-- v-bind,简写为 : ,在标签里操作属性,常用于父子组件的通信（props）  -->
    <input type="checkbox" :checked="check" />
    <!-- v-model双向数据绑定：数据改变会改变data中数据，data中数据改变使视图展示的数据发生改变 -->
    <!-- 
     Vue模板语法
     在标签中插入表达式{{js表达式}}
     在属性插入表达式，需配合v-bind指令  :xxx="js表达式"
     表达式：1.没有; 2.有返回值，可以是undefined
     语句：1.以;结尾，有些语句可以省略;，但解析时会加上去 2.没有返回值
    -->
    <p>{{ con }}</p>
    <!-- v-on：事件绑定,事件名="js表达式" -->
    <button v-on:click="handleClick">+</button>
    <div v-if="check">if</div>
    <div v-else-if="show">else-if</div>
    <div v-show="check">show</div>
    <div>computed{{ num }}</div>
    <div>computed{{ test }}</div>
    <!-- v-text不会解析标签 v-html解析标签 -->
    <div v-text="text"></div>
    <div v-html="text"></div>
    <div v-my="word"></div>

    <!-- class绑定3种 -->
    <!-- 1.静态绑定 -->
    <div class="red">color</div>
    <!-- 2.1通过三元表达式来进行两种类名的切换 ，即动态类名-->
    <div :class="change ? 'red' : 'green'">color</div>
    <!-- 2.2通过对象的形式展示类名,也是动态类名 -->
    <div
      :class="{
        red: change,
        green: !change,
      }"
    >
      color
    </div>
    <button @click="change = !change">change</button>
    <!-- 3.将类名以数组的方式展示 -->
    <div :class="[change ? 'red' : 'green']">color</div>
    <button @click="change = !change">change</button>

    <!-- style绑定2种 -->
    <!-- 1静态绑定 使用style属性 样式的书写格式为style标签里的写法 -->
    <div style="font-size: 20px; color: yellow">color</div>
    <!-- 2.动态绑定  style后面"{}" 以对象的形式设置  属性名写成小驼峰命名-->
    <div :style="{ fontSize: font + 'px' }">font</div>
    <input type="text" v-model="font" />
    <ul>
      <!-- v-for列表渲染，重复的li需要值不同key属性，以提高vue性能 -->
      <li v-for="(person, index) in persons" :key="index">
        {{ `${person.name}-${person.age}` }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key) in obj" :key="key">
        {{ value }}
      </li>
    </ul>

    <!-- 响应式 -->
    <!-- data中的数据为响应式的，数据更新时,data中的数据也变化,视图渲染的内容也会变化 -->
    <!-- data中的对象的原有属性是响应式的,给对象添加属性不会有视图变化,若想要让视图变化,可以使用this.$set(对象名，属性名，属性值) -->
    <button @click="obj.play = 'game'">改对象</button
    ><!-- data中的obj添加了play属性，但是视图没变化 -->
    <button @click="$set(obj, 'play', 'game')">改对象$set</button>
    <!-- 重新赋值也可以 -->
    <button @click="obj = { ...obj, play: 'game' }">改对象赋值</button>
    <!-- data中的数组是响应式的，原因是vue对改变原数组的方法进行了封装 -->
    <button @click="persons.push({ name: 'tq', age: 17 })">改数组</button>
    <!-- 给数组重新赋值效果与使用数组方法一样 -->
    <button @click="persons = [...persons, { name: 'tq', age: 17 }]">
      改数组
    </button>
    <!-- 组件的使用 -->
    <!-- 组件间通信4种 -->
    <!-- 1.props 通过v-bind指令,一般是父传子 -->
    <A :con="con"></A>
    <hr />
    <!-- 2.自定义事件 一般是子传父 -->
    <B @getSon="getSon"></B>
    <div>{{ son }}</div>
    <!-- ref指令可以给组件或者DOM元素标记，通过this.标记名就可以获取真实DOM或组件的实例 -->
    <B ref="son"></B>
    <div>{{ son }}</div>
    <hr />
    <!-- 3.全局事件总件 -->
    <!-- 常用于兄弟组件通信，由于当前组件绑定的事件，只能当前组件触发，全局事件总件实现了任意组件间的通信 -->
    <C></C>
    <hr />
    <!-- 4.插槽 在组件的中间 -->
    <!-- 插槽3种 -->
    <!-- 1.默认插槽 -->
    <D>
      <p>{{ con }}</p>
      <button v-on:click="handleClick">+</button></D>
    <hr />
    <!-- 2.具名插槽 -->
    <E>
      <!-- 使用template标签来拆分插槽 v-slot给template命名 可以简写为# -->
      <template v-slot:head>
        <div>header</div>
      </template>
      <div>main</div>
      <template #foot>
        <div>foot</div>
      </template>
    </E>
    <F>
      <!-- 子组件返回一个对象，通过属性获取传递的数据 -->
      <template v-slot:head="objf">
        <div>{{objf.number}}</div>
      </template>
      <template v-slot:head={number}>
        <div>{{number}}</div>
      </template>
    </F>
    <hr />
  </div>
</template>

<script>
// vue组件
// 使用：1.引入 2.注册组件 3使用
import A from "./views/A.vue";
import B from "./views/B.vue";
import C from "./views/C.vue";
import D from "./views/D.vue";
import E from "./views/E";
import F from "./views/F.vue";
export default {
  // Vue指令语法（v-xxx）：双向绑定 v-model  单向数据绑定 v-bind  事件绑定 v-on
  // 条件渲染 ：v-if v-else-if v-else（操作DOM） v-show(控制样式)
  // 列表渲染：v-for
  // 插槽：v-slot
  // v-html v-text
  // name属性：给组件命名
  name: "App",
  // 配置属性data（数据），可写成对象或函数，用来定义非函数数据，一般写成函数，这样组件复用时只会对当前的data进行操作
  data() {
    return {
      con: 1,
      check: false,
      show: true,
      persons: [
        { name: "zs", age: 18 },
        { name: "ls", age: 19 },
        { name: "ww", age: 17 },
      ],
      obj: {
        name: "zs",
        age: 18,
        do: "敲代码",
      },
      text: "<h1>haha</h1>",
      word: "hello",
      change: false,
      font: 12,
      son: 0,
    };
  },
  // methods属性：是一个对象，定义函数数据
  methods: {
    handleClick() {
      // 数据代理：vue将data、methods、computed中的数据进行数据代理，保存在vue实例上，因此要获取数据直接使用this获取
      this.con++;
      this.check = !this.check;
    },
    getSon(num) {
      this.son = num;
    },
  },
  computed: {
    // 只读
    num() {
      return this.con + 2;
    },
    // 可读可写
    test: {
      // set决定计算结果如何展示
      set(val) {
        console.log(val);
      },
      // get返回计算结果
      get() {
        return this.con + 1;
      },
    },
  },
  // computed属性：计算并返回结果,两种写法：只读与可读可写
  watch: {
    con() {
      console.log(1);
    },
  },
  // directives属性可以自定义指令
  directives: {
    my: {
      bind(el, binding) {
        el.innerHTML = binding.value.toUpperCase();
      },
    },
  },
  // componets属性：用来注册组件
  components: {
    A,
    B,
    C,
    D,
    E,
    F
  },
  // 生命周期钩子函数
  beforeDestroy() {
    // 常用钩子：用来收尾，清除定时器，解绑事件...
    this.$refs.son.$off("getSon", this.getSon);
    console.log("卸载前");
  },
  mounted() {
    // 常用钩子：可用于设置定时器，绑定自定义事件，发送请求...
    // vue的原型上有$on $once $emit $off等方法
    this.$refs.son.$on("getSon", this.getSon);
    console.log("挂载后");
  },
};
</script>

<style>
.red {
  background-color: red;
}
.green {
  background-color: greenyellow;
}
</style>
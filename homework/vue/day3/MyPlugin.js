let MyPlugin={
  install:function(Vue){
    // Vue对象扩展静态方法global
    Vue.global=function(){
      console.log("global")
    }
    // 给Vue实例扩展方法$method
    Vue.prototype.$method=function(){
      console.log("$method")
    }
    // Vue扩展自定义指令
    Vue.directive("upper",(el,binding)=>{
      el.textContent=binding.value.toUpperCase()
      // 转化大写的指令
    })
  }
}
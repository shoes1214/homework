/* 
防抖：一段时间只执行最后一次
*/

function debuonce(fn,time){
    let timer=null
    return function(){
        clearTimeout(timer)
        var _this=this,
        var e=arguments[0]
        timer=setTimeout(
            function(){
                fn.call(_this,e)
            },time
        )
    }
}
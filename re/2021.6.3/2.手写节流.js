/* 
一段时间内只执行第一次

*/
function throttle(fn,time){
    let last=0
    return function(){
    let now=Date.now()
    if(now-last<time) return
    fn.call(this,arguments[0])
    last=now
    }
}

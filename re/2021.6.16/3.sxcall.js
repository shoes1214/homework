Function.prototype.mycall=function(a,...arg){
    if(a===null||a===undefined){
        a=window
    }
    if(typeof a !=="object"||typeof a !=="function"){
        a=Object(a)
    }

    let cb=Symbol()
    a[cb]=this
    a[cb](...arg)
    delete a[cb]
}
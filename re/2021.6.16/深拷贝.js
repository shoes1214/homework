function deepclone(a){
    if( check(a)==="object"){
        var re={}
    }
    else if(check(a)==="array"){
        var re=[]
    }else{
        return a
    }
    for(var key in re){
        re[key]=deepclone(a[key])
    }
}
function check(a){
    return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()
}
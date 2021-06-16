let Util={}

Util.myajax=function(todolist){
    let{type,
        data:{
            todoname,
            isdone
        },
       url
    }=todolist
    let xhr=new XMLHttpRequest
    if(type==='get'){
        url+='?'+todostr
        todostr=''
    }
    xhr.open(type,url)
}

Util.obj2str=function(obj){
    let arr=[]
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`)
    }
    arr.join('&')
}
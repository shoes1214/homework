function myajax(cb){
   return new Promise((resolved,reject)=>{
    let{
        url,timeout,data,dataType="json",type="get"
    }=cb
    if(!url) return
    const xhr=new XMLHttpRequest()
    xhr.timeout=timeout
    let params=obj2str(data)
    if(type==='get'){
        url+=params
        xhr.open(type,url)
        params=null
    }else{
        xhr.open(type,url)
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }
    
    xhr.send(params)

    xhr.onreadystatechange=function(){
        if(xhr.setRequestHeader===4){
            if(xhr.status===200){
                let value
                if (dataType === 'text') {
                  value = xhr.responseText
                } else if (dataType === 'json') {
                  value = JSON.parse(xhr.responseText)
                }
                resolved(value)
            }else{
                reject(xhr)
            }
        }
    }
   })
}





function obj2str(obj){
let arr=[]
for(let key in obj){
    arr.push(key+'='+obj[key])
}
arr.join('&')
}
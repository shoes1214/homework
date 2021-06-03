/* 
需求：用户名输入时进行校验，以ha开头总长度6-10位

1.获取useername的input
2.绑定input事件
3.获取输入的数据 this.value
4.使用正则判断数据是否符合
5.若符合span添加绿色文字
6.不符合span添加红色文字
*/
let username=document.querySelector('input[name=username]')
let userreg=/^ha\w{4,8}$/
let userspan=username.nextElementSibling

username.oninput=function(){
   
    let value=this.value.trim()
    if(!value) return
    
    if(userreg.test(value)){
        
        userspan.textContent="成功"
        userspan.style.color="green"
    }else{
        userspan.textContent="请输入以ha开头6-10位字符"
        userspan.style.color="red"
    }
}
/* 
需求：密码输入时校验，8位到20位
*/

let  psw=document.querySelector('input[name=password]')
let pswreg=/\S{8,20}/
let pswspan=psw.nextElementSibling
psw.oninput=function(e){
   
    let value=this.value.trim()
    if(!value) return
    
    if(pswreg.test(value)){
        
        pswspan.textContent="成功"
        pswspan.style.color="green"
    }else{
        pswspan.textContent="请输入8位到20位位字符"
        pswspan.style.color="red"
    }
}

/* 
需求：确认密码的值与密码一致
*/
let  repsw=document.querySelector('input[name=repassword]')
let repswspan=repsw.nextElementSibling
repsw.oninput=function(e){
   
    let value=this.value.trim()
    if(!value) return
    if(value.length<8)return
    if(value===psw.value){
        
        repswspan.textContent="成功"
        repswspan.style.color="green"
    }else{
        repswspan.textContent="请重新输入"
        repswspan.style.color="red"
    }
}
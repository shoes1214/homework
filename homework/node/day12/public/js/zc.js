/* 
需求：输入框输入时进行表单校验
*/
/* 
1.获取输入框
2.绑定输入事件
3.使用正则校验是否符合
4.不符合往span插入不符合提示
5.符合往span插入符合提示
*/

const username=document.querySelector('input[name=username]')
const password=document.querySelector('input[name=password]')
const repassword=document.querySelector('input[name=repassword]')

function check(reg,str){
    return function(){
        if(!this.value){return}
    if(reg.test(this.value)){
        this.nextElementSibling.style.color="green"
        this.nextElementSibling.textContent="ok"
        }
    else{
        this.nextElementSibling.style.color="red"
        this.nextElementSibling.textContent=str
        }
    }
    
}


username.oninput=check(/^a\w{5,11}$/,'请输入以a开头6-12位字符')
password.oninput=check(/^\w{6,12}$/,'请输入6-12位密码')

repassword.oninput=function(){
    if(!this.value){return}
    if(this.value===password.value){
        this.nextElementSibling.style.color="green"
        this.nextElementSibling.textContent="ok"
        }
    else{
        this.nextElementSibling.style.color="red"
        this.nextElementSibling.textContent='请输入正确密码'
        }
    }
/* 
需求：点击提交按钮时进行校验，若不符合阻止点击事件
*/
btn=document.querySelector('input[type=submit]')

spans=document.querySelectorAll('span')

btn.onclick=function(e){
    if(spans[0].style.color!=="green"||spans[1].style.color!=="green"||spans[2].style.color!=="green"){
        alert('输入错误')
        e.preventDefault()
    }
    if(repassword.value!==password.value){
        alert('密码不一致')
        e.preventDefault()
    }
}
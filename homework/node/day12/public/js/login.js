const username=document.querySelector('input[name=username]')
const password=document.querySelector('input[name=password]')

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

console.log(username)
username.oninput=check(/^a\w{5,11}$/,'请输入以a开头6-12位字符')
password.oninput=check(/^\w{6,12}$/,'请输入6-12位密码')

btn=document.querySelector('input[type=submit]')

spans=document.querySelectorAll('span')

btn.onclick=function(e){
    if(spans[0].style.color!=="green"||spans[1].style.color!=="green"){
        alert('输入错误')
        e.preventDefault()
    }
    
}
(async function(){
    let re=require('../../express')
    await "a"
    console.log(re)
    if(re===1){
        confirm('账号错误')
    }
    if(re===2){
        confirm('密码错误')
    }
})()

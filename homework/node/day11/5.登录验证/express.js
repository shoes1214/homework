const express=require('express')
const model=require('./mongoose')
const app=express()


app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:true}))
app.post('/zc',(request,response)=>{
    console.log(request.body)
    model.findOne({username:request.body.username},{_id:0},(err,data)=>{
        if(data===null){
            model.create({
                username:request.body.username,
                password:request.body.password
            })
            response.send("注册成功")
        }else{
            response.send("用户名已存在")
        }
    })
    

})
app.post('/login',(request,response)=>{
    console.log(request.body)
    model.findOne({username:request.body.username},{_id:0},(err,data)=>{
        if(data===null){
            module.exports=1
            response.redirect('http://127.0.0.1:5000/html/login.html')
            
        }else if(data.password===request.body.password){
            response.send("登录成功") 
        }else{
            module.exports=2
            response.redirect('http://127.0.0.1:5000/html/login.html')
           /*  confirm('密码错误') */
        }
    })
    

})
app.listen(5000,()=>{
    console.log("成功")
})
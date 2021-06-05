(async function(){
const express=require('express')
const db=require('./mongo/db')
const {createuser}=require('./mongo/crud/zc')
const {find}=require('./mongo/crud/login')

await db
const app=express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './mb')
app.post('/zc',async(req,res)=>{
    const {username,password}=req.body
    await createuser(username,password)
    res.redirect('http://127.0.0.1:5000/html/login.html')
    
})
app.post('/login',async(req,res)=>{
    const {username,password}=req.body
    let user=await find(username,password)
    if(user){
        res.render('main',user)
    }else{
        res.send('账号或密码错误')
    }
    
})
app.listen(5000,()=>{
    console.log('成功')
})
})()


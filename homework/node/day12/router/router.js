const express=require('express')
const {createuser}=require('../mongo/crud/zc')
const {find}=require('../mongo/crud/login')

const router=express.Router()

router.post('/zc',async(req,res)=>{
    const {username,password}=req.body
    await createuser(username,password)
    res.redirect('http://127.0.0.1:5000/html/login.html')
    
})
router.post('/login',async(req,res)=>{
    const {username,password}=req.body
    let user=await find(username,password)
    if(user){
        res.render('main',user)
    }else{
        res.send('账号或密码错误')
    }
    
})
module.exports=router
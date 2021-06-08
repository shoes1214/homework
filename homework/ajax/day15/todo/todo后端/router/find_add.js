const express=require('express')
const router=express.Router()
const add=require('../mongo/crud/add')
const find=require('../mongo/crud/find')

//数据库中查找todo的路由
router.get('/find',async(req,res)=>{
    let todolist=await find()
    res.send(todolist)

})
//加一个未完成的todo
router.post('/add',async(req,res)=>{
    const todoname=req.body
    await add(todoname)
    let todolist=await find()
    res.send(todolist)
})

module.exports=router
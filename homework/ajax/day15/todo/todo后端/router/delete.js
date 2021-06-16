const express=require('express')
const {find}=require('../mongo/crud/find')
const{ deleteone,deletemany}=require('../mongo/crud/delete')
const router=express.Router()
//删除一条todo
router.post('/delete',async(req,res)=>{
const{id}=req.body
await deleteone(id)
let todolist=await find()
res.send(todolist) 
})
//删除所有todo
router.post('/deleteall',async(req,res)=>{
    let{ids}=req.body
    ids=JSON.parse(ids)
    await deletemany(ids)
    let todolist=await find()
    res.send(todolist) 
})

module.exports=router
const express=require('express')
const router=express.Router()
const {updateone,updatemany}=require('../mongo/crud/update')
const {find}=require('../mongo/crud/find')
//修改一个todo状态
router.post('/update',async(req,res)=>{
const{id,isdone}=req.body
await updateone(id,isdone)
let todolist=await find()
res.send(todolist)
})
//修改所有todo状态
router.post('/updateall',async(req,res)=>{
    let{ids,isdone}=req.body
    ids=JSON.parse(ids)
    await updatemany(ids,isdone)
    let todolist=await find()
    res.send(todolist)
})

module.exports=router
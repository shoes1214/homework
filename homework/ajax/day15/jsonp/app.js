const express=require('express')

const app=express()

app.get('/test',(req,res)=>{
    const{callback}=req.query
    
    let arr=[1,2]
    res.send(`${callback}(${JSON.stringify(arr)})`)
})

app.listen(5000,()=>{
    console.log('服务器开启成功')
})
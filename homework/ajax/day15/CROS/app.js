const express=require('express')

const app=express()
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*')
    next()
})
app.post('/test',(req,res)=>{
    
    res.send(req.body)
})
app.listen(5000,()=>{
    console.log('ok')
})

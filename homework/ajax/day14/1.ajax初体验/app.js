const express=require('express')
const app=express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/test',(req,res)=>{
    res.send('get-ok')
})
app.post('/test',(req,res)=>{
    res.send('post-ok')
})

app.listen(5000,()=>{
    console.log('ok')
})
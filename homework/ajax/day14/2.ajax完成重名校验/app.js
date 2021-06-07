const express=require('express')
const app=express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/test',(req,res)=>{
    res.send('get-ok')
})
app.post('/test',(req,res)=>{
    const {username}=req.body
    let arr=['zs','ls']
   
    arr.includes(username)?res.send('notok'):res.send('ok')
})

app.listen(5000,()=>{
    console.log('ok')
})
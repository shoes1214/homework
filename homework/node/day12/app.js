(async function(){
const express=require('express')
const db=require('./mongo/db')
const router=require("./router/router")

await db
const app=express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './mb')

app.use(router)
app.listen(5000,()=>{
    console.log('成功')
})
})()


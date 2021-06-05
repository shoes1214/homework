(async function(){
const express=require('express')
const db=require('./mongo/db')
const brouter=require("./router/brouter")
const afrouter=require("./router/afterlogin")
var cookieParser = require('cookie-parser')
await db
const app=express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', './mb')

app.use(brouter)
app.use(afrouter)

app.listen(5000,()=>{
    console.log('成功')
})
})()


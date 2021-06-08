(async function(){
const db=require('./mongo/db')
await db
const express=require('express')
const cros=require('cros')
const derouter=require('./router/delete')
const farouter=require('./router/find_add')
const udrouter=require('./router/update')

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(cros())
app.use(derouter)
app.use(farouter)
app.use(udrouter)




app.listen(5000,()=>{
    console.log('服务器开启成功')
})
})()


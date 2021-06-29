const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.get("/test",(req,res)=>{
    res.send([{
        name:"zs",age:18
    },{
        name:"ls",age:20
    }])
})
app.listen(5000,()=>{
    console.log("成功")
})
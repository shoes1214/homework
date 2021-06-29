const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.get("/test",(req,res)=>{
    res.send([{
        name:"sz",
        age:18
    },{
        name:"ls",
        age:20
    },{
        name:"ww",
        age:22
    }])
})
app.listen(5000,()=>{
    console.log("成功")
})

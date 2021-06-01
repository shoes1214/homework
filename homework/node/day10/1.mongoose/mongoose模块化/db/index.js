const mongoose=require('mongoose')
const re=mongoose.connect('mongodb://127.0.0.1:27017/lx',{ useNewUrlParser: true ,useUnifiedTopology: true})
console.log("数据库连接成功")
module.exports=re
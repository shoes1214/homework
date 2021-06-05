const mongoose=require('mongoose')
module.exports=mongoose.connect("mongodb://127.0.0.1:27017/0604",{ useNewUrlParser: true,useUnifiedTopology: true  })
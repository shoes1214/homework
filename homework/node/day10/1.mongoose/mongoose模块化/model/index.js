 const mongoose=require('mongoose')
const Schema=mongoose.Schema
//实例化创建schema对象
const schemaobj=new Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    info:{
        type:Schema.Types.Mixed,
        default:"暂无"
    }

})
//创建model对象
const model=mongoose.model('students',schemaobj)
module.exports=model
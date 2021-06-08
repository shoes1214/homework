const mongoose=require('mongoose')
const Schema=mongoose.Schema
const schemaObj=new Schema({
    todoname:{
        type:String,
        required:true,
        unique:true
    },
    isdone:{
        type:String,
        default:'false'
    }
})

module.exports=mongoose.model('todolist',schemaObj)
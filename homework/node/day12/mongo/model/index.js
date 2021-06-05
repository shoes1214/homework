const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()

    }
})
const model=mongoose.model('yhs',schema)
module.exports=model
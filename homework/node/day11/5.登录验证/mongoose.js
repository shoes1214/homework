const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/lx',{ useNewUrlParser: true ,useUnifiedTopology: true})
const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    }
})

const model=mongoose.model('haha',schema)
/* model.create({
    username:'ha111111111111',
    password:11111111111111
}) */
mongoose.set('useCreateIndex', true)
module.exports=model
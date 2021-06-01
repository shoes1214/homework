//mongoose是一个用来操作mongodb数据库软件的js库
(async function(){
//先引入mongoose
const mongoose=require('mongoose')
//连接数据库
try{
    await mongoose.connect('mongodb://127.0.0.1:27017/lx',{ useNewUrlParser: true ,useUnifiedTopology: true})
//测试连接成功
console.log("数据库连接成功")
//创建约束对象，先获取构造函数
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
const modelobj=model.create({
    name:'zs',
    age:18,
    info:'play'
})
console.log(modelobj,'aaa')
}
catch(err){
    console.log(err)
}

})()

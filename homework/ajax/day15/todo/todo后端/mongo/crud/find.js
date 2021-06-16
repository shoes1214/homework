const model=require('../model')

function find(){
    //封装一个找出数据库所有todo的函数
    return model.find()
}

module.exports={find}
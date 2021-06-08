const model=require('../model')

function findall(){
    //封装一个找出数据库所有todo的函数
    return model.find()
}

module.exports={findall}
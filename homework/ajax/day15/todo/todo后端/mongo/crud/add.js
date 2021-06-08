const model=require('../model')

function add(todoname){
    //封装一个添加一个todo的函数
    return model.create({todoname})
}

module.exports={add}
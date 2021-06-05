/* 
封装一个创建的函数
*/

const model=require('../model')
const md5=require('md5')

function createuser(username,password){
   
    return model.create({
        username,
        password:md5(password)
    })
}
module.exports={createuser}
const model=require('../model')
const md5=require('md5')
function find(username,password){
   
    return model.findOne({
        username,
        password:md5(password)
    })
}
module.exports={find}
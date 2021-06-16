const model=require('../model')

function updateone(id,isdone){
    return model.updateOne({_id:id},{$set:{isdone}})
}

function updatemany(ids,isdone){
    return model.updateMany({_id:{$in:ids}},{$set:{isdone}})
}

module.exports={
    updateone,updatemany
}
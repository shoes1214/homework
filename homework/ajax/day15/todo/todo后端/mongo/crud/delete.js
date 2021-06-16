const model=require('../model')

function deleteone(id){
    return model.deleteOne({_id:id})
}

function deletemany(ids){
    return model.deleteOne({_id:{$in:ids}})
}

module.exports={
    deleteone,deletemany
}
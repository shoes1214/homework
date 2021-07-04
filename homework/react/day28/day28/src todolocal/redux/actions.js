import { UPDATETODO,UPDATEID,DELETEONE,ALLDELETE,CHANGEDONE} from "./contants";

function updateTodo(data){
    return {type:UPDATETODO,data}
}
function updateId(id){
    return {type:UPDATEID,id}
}
function deleteOne(id){
    return {type:DELETEONE,id}
}
function allDelete(){
    return {type:ALLDELETE}

}
function changeDone(){
    return {type:CHANGEDONE}

}
export {updateTodo,updateId,deleteOne,allDelete,changeDone}
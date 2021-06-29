import {UPDATETODO,UPDATEID,DELETEONE,ALLDELETE,CHANGEDONE} from "./contants"
let initState = {
    list: [
      { id: 1, todoName: '吃饭', isDone: false },
      { id: 2, todoName: '敲代码', isDone: true },
    ],
  }
export default function(state=initState,action){
  let {list}=state
  let newList=[]
    switch(action.type){
        
        case UPDATETODO:{
          let id=list.length?list[list.length-1].id+1:1
          let obj={
            todoName:action.data,
            isDone:false,
            id
          }
          newList=[...list]
          newList.push(obj)
          return {
            ...state,
            list:newList
          }
        }
        case UPDATEID:{
          newList=list.map((item)=>{
            if(item.id===action.id){
              item.isDone=!item.isDone
            }
            return item
          })
          return {
            ...state,
            list:newList
          }
        }
        case DELETEONE:{
          newList=list.filter((item)=>{
            return item.id!=action.id
          })
          return {
            ...state,
            list:newList
          }
        }
        case ALLDELETE:{
          newList=list.filter((item)=>{
            return !item.isDone
          })
          return {
            ...state,
            list:newList
          }
        }
        case CHANGEDONE:{
          let result=list.every((item)=>item.isDone)
        newList=list.map((item)=>{
          item.isDone=!result
          return item
        })
        return {
          ...state,
          list:newList
        }
      }
        default:return state
    }
}
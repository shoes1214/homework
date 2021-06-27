import {createStore} from "redux"
const store=createStore(reducer)

function reducer (state={count:0},action){
  console.log(state,action.type)
  switch(action.type){
    case"ADD":
    return {...state,
    count:state.count+1
    }
    default:return state
  }
}

console.log(store.getState().count)
store.dispatch({type:"ADD"})
console.log(store.getState().count)
store.dispatch({type:"ADD"})
console.log(store.getState().count)
store.dispatch({type:"ADD"})
console.log(store.getState().count)
store.dispatch({type:"ADD"})
import {ADD} from "./containts"
export default function(state={list:[]},action){
    switch(action.type){
        case ADD:
            console.log("action",action)
            return {
                ...state,
                list:action.data
            }
        default:return state
    }
}
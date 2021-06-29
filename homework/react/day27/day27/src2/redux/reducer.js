
export default function(state={list:[]},action){
switch(action.type){
    case "ADD":
        

        return{
            ...state,
            list:action.data
        }
    default:return state
}
}
export default function(state={count:1},action){
    switch(action.type){
        case "ADD":
            return {
                ...state,
                count:state.count+1
            }
        case "MIN":
            return {
                ...state,
                count:state.count-1
            }
        default:return state
    }
}
import {connect} from "react-redux"
import List from "../component/List"
function mapStateToProps(state){
    return {
        ...state
    }
}
function mapDispatchToProps(){
    return (dispatch)=>{
        dispatch()
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)
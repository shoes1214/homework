import {connect} from "react-redux"
import List from "../component/List"
import { addNum } from "../redux/actions"
function mapStateToProps(state){
    return {
        count:state.count
    }
}

export default connect(mapStateToProps,{addNum})(List)
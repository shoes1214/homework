import {connect} from "react-redux" 
import List from "../component/List";
import {addAsync} from "../redux/actions"
export default connect((state)=>({list:state.list}),{addAsync})(List)

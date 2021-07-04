import {connect} from "react-redux"
import Item from "../components/Item/Item"
import {updateId,deleteOne} from "../redux/actions"
export default connect((state)=>({list:[...state.list]}),{updateId,deleteOne})(Item)
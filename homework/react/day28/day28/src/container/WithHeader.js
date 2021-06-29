import {connect} from "react-redux"
import {updateTodo} from "../redux/actions"
import Header from "../components/Header/Header"
export default connect(null,{updateTodo})(Header)
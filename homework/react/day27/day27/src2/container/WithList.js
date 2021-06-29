import {connect} from "react-redux"
import List from "../component/List"
import {addListAsync} from "../redux/actions"
export default connect((state) => ({ list: state.list }), { addListAsync })(List)
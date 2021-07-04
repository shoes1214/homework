import {connect} from "react-redux"
import Footer from '../components/Footer/Footer'
import{allDelete,changeDone} from "../redux/actions"
export default connect((state) => ({ list: [...state.list] }),{allDelete,changeDone})(Footer)
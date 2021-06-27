import React from 'react'
import {connect} from "react-redux"
 function Count(props) {
    console.log(props)
    return (
        <div>
            <button onClick={()=>{ props.dispatch({type:"ADD"})}
                
               
            }>+</button>
            {props.count}
            <button onClick={()=>{props.dispatch({type:"MIN"})}
                
            }>-</button>
        </div>
    )
}
function mapStateToProps(state){
    return{
        count:state.count
    }
}
export default connect(mapStateToProps)(Count)
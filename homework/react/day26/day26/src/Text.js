import React from 'react'
import { withRouter } from 'react-router-dom'
 function Text(props) {
    return (
        <div>
           {console.log(props)}
        </div>
    )
}
export default withRouter(Text)
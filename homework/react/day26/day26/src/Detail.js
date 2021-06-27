import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <h1>Detail</h1>
            {props.location.state.count}
            <br></br>
            {props.match.params.id}
        </div>
    )
}

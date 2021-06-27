import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1>About</h1>
            <button onClick={
                props.history.replace("/Text")
            }>totext</button>
        </div>
    )
}

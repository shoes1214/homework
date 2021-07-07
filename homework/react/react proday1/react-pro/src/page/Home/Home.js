import React from 'react'
// 结构props的写法
export default function Home({location}) {
    let src=location.state.avatar
    return (
        <div>
            <h1>{location.state.username}</h1>
            <img src={src} alt="" />
        </div>
    )
}

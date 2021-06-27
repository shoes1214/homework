import React from 'react'
import { Link,Route } from 'react-router-dom'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
export default function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>{
                props.history.push("/Detail/1",{count:1})
            }}>tode</button>
            <Link to="/Home/Item1">Item1</Link>
            <Link to="/Home/Item2">Item2</Link>
            <Link to="/Home/Item3">Item3</Link>

            <Route path="/Home/Item1" component={Item1}></Route>
            <Route path="/Home/Item2" component={Item2}></Route>
            <Route path="/Home/Item3" component={Item3}></Route>
        </div>
    )
}

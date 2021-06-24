import React, { Component } from 'react'
import withForm from './WIthForm'
import Login from "./Login"
import Register from "./Register"

let WithRegister=withForm(Register)
let WithLogin=withForm(Login)
export default class App extends Component {
   
    state={name:"zs"}
    render() {
        return (
            <div>
               <WithLogin></WithLogin>
               <WithRegister></WithRegister>
            </div>
        )
    }
}

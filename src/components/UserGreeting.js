import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        return this.state.isLoggedIn && <h1>Hello Nabendu</h1>
        //return this.state.isLoggedIn ? <h1>Hello Nabendu</h1> : <h1>Hello Guest</h1>

        // let message;
        // if(this.state.isLoggedIn) {
        //     message=<h1>Hello Nabendu</h1>
        // } else {
        //     message=<h1>Hello Guest</h1>
        // }
        // return <>{message}</>
    }
}

export default UserGreeting

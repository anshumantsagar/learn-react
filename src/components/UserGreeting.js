import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        //**********Short Circuit Operator**********
        return this.state.isLoggedIn && <div>Welcome Anshumant</div>

        //**********Ternary Conditional Operator**********
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Anshumant</div> :
        //     <div>Welcome Guest</div>
        // )

        //**********Element Variables**********
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Anshumant</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //**********if/else condition**********
        // if (this.state.isLoggedIn){
        //     return <div>Welcome Anshumant</div>
        // } else{
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>
        //             Welcome Anshumant
        //         </div>
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting

import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
import { createBrowserHistory } from "history";

import './style.css';

const history = createBrowserHistory({forceRefresh:true});

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
            referralCode: ""
        };
        this.Register = this.Register.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    Register = async e => {
        // e.preventDefault();
        try {
            e.preventDefault();
            console.log("method called");
            history.push("userDashboard");
            
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        return (
            <div id="forSignUp">
                <div >
                    <form onSubmit={this.Register}>
                        <div class="form-group">
                            <input type="text" class="form-control" id="userName" placeholder="Uername"></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password"></input>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="referralCode" placeholder="Referral code"></input>
                        </div>
                        <div >
                            <button type="submit" name="signIn" class=" btn btn-info">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="signin">
                    {/* <a href="" id="login">Login</a>
                    <a href="" id="forgot">Forgot</a> */}
                    
                    <NavLink to="/signIn" id="login">Sign In</NavLink> 
                    <NavLink to="/resetPassword" id="forgot">Forgot</NavLink> 

                </div>
            </div>
        );
    }
}


export default SignUp;


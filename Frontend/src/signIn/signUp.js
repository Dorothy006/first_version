import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from "history";

import './style.css';

const history = createBrowserHistory({ forceRefresh: true });

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
        this.ValidateInput = this.ValidateInput.bind(this);
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
    
    
    ValidateInput(email,userName,password,referralCode) {
        let emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        console.log(emailPattern.test(email));
        // let userNamePattern = ;
        // console.log(userNamePattern.test(userName));
        // let passwordPattern = ;
        // console.log(passwordPattern.test(password));
        // let referralCodePattern = ;
        // console.log(referralCodePattern.test(referralCode));

        return emailPattern.test(email);
    };
    Register = async e => {
        try {
            e.preventDefault();
            console.log(this.state.email,this.state.userName,this.state.password,this.state.referralCode);
            this.ValidateInput(this.state.email);
            //save uerinfo to the mysqldb
            history.push("user");

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
                            <input type="text" class="form-control" name="userName" placeholder="UserName" value = {this.state.userName} onChange={this.handleChange}></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="Password" value = {this.state.password} onChange={this.handleChange}></input>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="referralCode" placeholder="Referral code"   value = {this.state.referralCode} onChange={this.handleChange}></input>
                        </div>
                        <div >
                            <button type="submit" name="signIn" class=" btn btn-info">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="signin">
                    <NavLink to="/signIn" id="login">Sign In</NavLink>
                    <NavLink to="/resetPassword" id="forgot">Forgot</NavLink>

                </div>
            </div>
        );
    }
}


export default SignUp;


import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.ResetPassword = this.ResetPassword.bind(this);
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


  ResetPassword = async e => {
    //e.preventDefault();



  };


  render() {
    return (
      <div id="forSignUp">
        <div >
          <form >
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email"></input>
            </div>
            <div >
              <button type="submit" name="signIn" class=" btn btn-info">Reset Password</button>
            </div>
          </form>
        </div>
        <div class="signin">
          <NavLink to="/signIn" id="login">Sign In</NavLink> 
          <NavLink to="/signUp" id="forgot">Sign Up</NavLink>

        </div>
      </div>
    );
  }
}



export default ResetPassword;


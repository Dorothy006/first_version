import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
    this.SignIn = this.SignIn.bind(this);
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

  
  SignIn = async e => {
    //e.preventDefault();


    
  };


  render() {
    return (
      <div id="forSignUp">
      <div >
          <form>
              <div class="form-group">
                  <input type="text" class="form-control" id="userName" placeholder="Uername"></input>
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" id="password" placeholder="Password"></input>
              </div>
              <div >
                  <button type="submit" name="signIn" class=" btn btn-info">Log In</button>
              </div>
          </form>
      </div>
      <div class="signin">
          {/* <a href="" id="login">Login</a>
          <a href="" id="forgot">Forgot</a> */}
          
          <NavLink to="/signUp" id="login">Sign Up</NavLink> 
          <NavLink to="/resetPassword" id="forgot">Forgot</NavLink> 

      </div>
  </div>
    );
  }
}


export default SignIn;


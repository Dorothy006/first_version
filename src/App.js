import React, { Component } from "react";
import './App.css';

///////////////////
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import SignUp from "../src/signIn/signUp";
import SignIn from "../src/signIn/signIn";
import ResetPassword from "../src/signIn/resetPassword";
import Layout from "../src/layout/layout";

const hist = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    return (
      <div className="App">
        <Router history={hist}>
          <Switch>
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/resetPassword" component={ResetPassword} />
            <Route exact path="/userDashboard" component={Layout} />
          </Switch>


        </Router>
      </div>
    );
  }
}

export default App;
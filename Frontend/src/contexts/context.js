import React from "react";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const defaultStore = {
  status:null
};

const Context = React.createContext(defaultStore);

export default Context;

export class Provider extends React.Component {
  state = {
    status:null
  };


  logOut = async =>{
    cookies.remove();
    // history.push('signIn&register');

  };
  

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          init: this.init,
          
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
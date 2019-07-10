/////////////////////////////////////////////////////////////////////////////////////////////////
/* eslint-disable */
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Sidebar from "../components/sidebar";

import routes from "../userRoute/route";


const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

class Dashboard extends React.Component {
  
    render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="something">
        <Sidebar
          routes={routes}          
          {...rest}
        />
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Dashboard;



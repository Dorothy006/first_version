/////////////////////////////////////////////////////////////////////////////////////////////////
/* eslint-disable */
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./footer"
import Sidebar from "../components/sidebar";
import routes from "../userRoute/route";

import "../layout/layout.css"


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

/////////////////////////////
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="wrapper">
        <div className="sidebarContainer">
          <Sidebar  />
        </div>
        <div className="mainPanel">
          <div className="content">

          </div>
          <div className="forFooter">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}




Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Dashboard;



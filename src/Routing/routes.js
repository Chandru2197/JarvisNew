import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// screens
import Home from "../Screens/home";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path={"/"}
          render={(props) => (
            <React.Fragment>
              <div className="app-body">
                <Home {...props} />
              </div>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path={"/1"}
          render={(props) => (
            <React.Fragment>
              <div className="app-body">
                <Home {...props} />
              </div>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path={"/2"}
          render={(props) => (
            <React.Fragment>
              <div className="app-body">
                <Home {...props} />
              </div>
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

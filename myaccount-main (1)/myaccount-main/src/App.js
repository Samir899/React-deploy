import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// Importing auth components
import CheckIfLoggedIn from "./CheckIfLoggedIn";

// Importing all pages
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

export default class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Profile} />
            {/* <CheckIfLoggedIn exact path="/" component={Profile} />
            <CheckIfLoggedIn exact path="/profile" component={Profile} /> */}
            <Route exact path="/404" component={Error404} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </CookiesProvider>
    );
  }
}

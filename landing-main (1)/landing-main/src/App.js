import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Importing auth components
import CheckIfLoggedIn from "./CheckIfLoggedIn";

// Importing all pages
import Index from "./pages/Index";
import About from "./pages/About";
import Players from "./pages/Players";
import Subscribe from "./pages/Subscribe";
import Fixtures from "./pages/Fixtures";
import Newsroom from "./pages/Newsroom";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Sponsors from "./pages/Sponsors";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataProcessingAddendum from "./pages/DataProcessingAddendum";
import Error404 from "./pages/Error404";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CheckIfLoggedIn exact path="/" component={Index} />
          <CheckIfLoggedIn exact path="/about" component={About} />
          <CheckIfLoggedIn exact path="/players" component={Players} />
          <CheckIfLoggedIn exact path="/subscribe" component={Subscribe} />
          <CheckIfLoggedIn exact path="/fixtures" component={Fixtures} />
          <CheckIfLoggedIn exact path="/newsroom" component={Newsroom} />
          <CheckIfLoggedIn exact path="/careers" component={Careers} />
          <CheckIfLoggedIn exact path="/sponsors" component={Sponsors} />
          <CheckIfLoggedIn exact path="/gallery" component={Gallery} />
          <CheckIfLoggedIn exact path="/privacy-policy" component={PrivacyPolicy} />
          <CheckIfLoggedIn
            exact
            path="/data-processing-addendum"
            component={DataProcessingAddendum}
          />
          <CheckIfLoggedIn exact path="/terms-of-service" component={TermsOfService} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

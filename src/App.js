// src/App.js
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import * as r from './constants/routes';
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import {
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  PasswordChangeForm,
  SignOutButton,
} from "./Components/Authentication";

import LandingPage from "./Components/LandingPage";
import AccountPage from "./Components/Account";
import BadgesPage from "./Components/Badges";
import NotFoundPage from "./Components/NotFound";

import { withAuthentication } from "../src/Components/Session";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path={r.LANDING} component={LandingPage} />
          <Route exact path={r.SIGN_UP} component={SignUpPage} />
          <Route exact path={r.SIGN_IN} component={SignInPage} />
          <Route exact path={r.SIGN_OUT} component={SignOutButton} />
          <Route exact path={r.ACCOUNT} component={AccountPage} />
          <Route exact path={r.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={r.PASSWORD_RESSET} component={PasswordChangeForm} />
          <Route path={r.BADGES} component={BadgesPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default withAuthentication(App);

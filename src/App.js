// src/App.js
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import * as r from './routes';
import "./App.css";

import { Header, Footer, LandingPage, AccountPage, BadgesPage, NotFoundPage } from "./Components";

import {
  SignUpPage, SignInPage, PasswordForgetPage, PasswordChangeForm, // SignOutButton,
} from "./Components/Authentication";

import { withAuthentication } from "../src/Components/Session";


function App() {
  return (
    <Router>
      <div id="page-container" className="App">
        <Header />

        <Switch>
          <Route exact path={r.LANDING}><Redirect to={r.BADGES} /></Route>
          <Route exact path={r.SIGN_IN} component={SignInPage} />
          <Route exact path={r.SIGN_UP} component={SignUpPage} />
          {/* <Route exact path={r.SIGN_OUT} component={SignOutButton} /> */}
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

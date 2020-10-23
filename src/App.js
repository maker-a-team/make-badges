// src/App.js
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import * as r from './constants/routes';
import "./App.css";
import Title from "./Components/Header";
import Footer from "./Components/Footer";

import {
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  PasswordChangeForm,
  SignOutButton,
} from "./Components/Authentication";

import About from "./Components/About";
import AccountPage from "./Components/Account";
import BadgesPage from "./Components/Badges";
import NotFoundPage from "./Components/NotFound";

import { withAuthentication } from "../src/Components/Session";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path={r.LANDING} component={SignInPage} />
          <Route exact path={r.SIGN_UP} component={SignUpPage} />
          <Route exact path={r.SIGN_IN} component={SignInPage} />
          <Route exact path={r.SIGN_OUT} component={SignOutButton} />
          <Route exact path={r.ACCOUNT} component={AccountPage} />
          <Route exact path={r.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={r.PASSWORD_RESSET} component={PasswordChangeForm} />

          <Route exact path={r.ABOUT} component={About} />
          <Route path={r.BADGES} component={BadgesPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default withAuthentication(App);
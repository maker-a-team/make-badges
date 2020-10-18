// src/App.js
import { HashRouter as Router, Route } from "react-router-dom";
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Header";
import Footer from "./Components/Footer";

// import BadgeList from "./Components/Badge-/BadgeList";
// import BadgeList from "./Components/Badges/BadgeList";
// import BadgeItem from "./Components/Badges/BadgeItem";
import About from "./Components/About";
// import BadgeDetails from "./Components/Badges/BadgeDetails";

import {
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  PasswordChangeForm,
  SignOutButton,
} from "./Components/Authentication";
import AccountPage from "./Components/Account";
import { withAuthentication } from "../src/Components/Session";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />

        <Route exact path="/" component={SignInPage} />
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/signIn" component={SignInPage} />
        <Route exact path="/forgotPassword" component={PasswordForgetPage} />
        <Route exact path="/resetPassword" component={PasswordChangeForm} />

        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/signOut" component={SignOutButton} />

        <Route exact path="/about" component={About} />
        {/* <Route exact path="/badgelist" component={BadgeList} /> */}
        {/* <Route exact path="/badgelist" component={BadgeList} /> */}
        {/* <Route path="/details/:category/:id" component={BadgeItem} /> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default withAuthentication(App);

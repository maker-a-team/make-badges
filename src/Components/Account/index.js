// src/components/AccountPage
import React from "react";
import { compose } from "recompose";

import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from "../Session";

// import LoginManagement from "../Authentication/LoginManagement";
// import { PasswordForgetForm } from '../Authentication/PasswordForget';
// import PasswordChangeForm from "../Authentication/PasswordChange";
import SignOutButton from "../Authentication/SignOut";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div id="content-wrap" className="AccountPage">
        <div className="usercard">
          <img
            className="profile-photo"
            src={"https://picsum.photos/200"}
            width="100"
            height="100"
            alt="Profile"
          />
          <h3>{authUser.username}'s Account</h3>
          <p>
            <strong>Email: </strong>
            {authUser.email}
            <br />
          </p>
          <p>
            <strong>Awards: </strong>
            <br />
            {JSON.stringify(authUser.awardsEarned)}
            <br />
          </p>
        </div>
        <hr />
        {/* Forgot Your Password? <PasswordForgetForm /> */}
        {/* Reset Your Password. <PasswordChangeForm /> */}
        {/* <LoginManagement authUser={authUser} /> */}
        <SignOutButton />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AccountPage);

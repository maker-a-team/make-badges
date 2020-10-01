// src/Header/Title.js
import React from "react";
import "./Title.css";
import { NavLink } from "react-router-dom";


function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Make School Badges</h1>
        <div className="Title-Subtitle">Sub-Title</div>

        <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/badgelist"
          >
            List
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/account"
          >
            My Account
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/signIn"
          >
            Sign in
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Title;

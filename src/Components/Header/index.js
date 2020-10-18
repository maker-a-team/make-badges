// src/Header/Title.js
import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo-white.svg";
import * as r from '../../constants/routes';

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="nav-logo" alt="logo" />

      <div className="nav-items">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to={r.BADGES}
        >
          List
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to={r.ABOUT}
        >
          About
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to={r.ACCOUNT}
        >
          My Account
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to={r.SIGN_IN}
        >
          Sign in
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

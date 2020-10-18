// src/Header/Title.js
import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo-white.svg";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="nav-logo" alt="logo" />

      <div className="nav-items">
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
  );
}

export default Header;

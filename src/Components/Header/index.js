// src/Header/Title.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo-white.svg";
import * as r from '../../constants/routes';

function Header() {
  return (
    <header id="Header">
      <a href="https://makeschool.com/portal">
        <img src={logo} id="nav-logo" alt="logo" />
      </a>

      <div id="nav-items">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to={r.ACCOUNT}
        >
          Account
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to={r.BADGES}
        >
          List
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

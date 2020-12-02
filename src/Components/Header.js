// src/Header/Title.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo-white.svg";
import * as r from '../routes';

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
          to={r.BADGES}
        >
          Badges
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to={r.ACCOUNT}
        >
          Account
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

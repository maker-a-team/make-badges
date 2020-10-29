// src/Footer/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  var curr_year = new Date().getFullYear();

  return (
    <footer className="Footer">
      <h3>Make School A-Team Copyright {curr_year}</h3>
    </footer>
  );
}

export default Footer;

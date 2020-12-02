// src/Footer/Footer.js
import React from "react";

function Footer() {
  var curr_year = new Date().getFullYear();

  return (
    <footer id="Footer">
      <h3>Make School A-Team Copyright {curr_year}</h3>
    </footer>
  );
}

export default Footer;

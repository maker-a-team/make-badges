// src/Footer/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  var curr_year = new Date().getFullYear();

  return (
    <div className="Footer">
      <footer>
        <div className="Footer-Subtitle">
          <h3>Make School A-Team Copyright {curr_year}</h3>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

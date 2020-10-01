// src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Header/Title";
import Footer from "./Footer/Footer";
import BadgeList from "./Badges/BadgeList";



function App() {
  return (
    <div className="App">
      <Title />
      <BadgeList />
      <Footer />
    </div>
  );
}

export default App;

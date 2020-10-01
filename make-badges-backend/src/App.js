// src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Header/Title";
import BadgeList from "./Badges/BadgeList";


function App() {
  return (
    <div className="App">
      <Title />
      <BadgeList />
    </div>
  );
}

export default App;

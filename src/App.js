// src/App.js
import { HashRouter as Router, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Header/Title";
import Footer from "./Components/Footer/Footer";

import BadgeList from "./Components/Badges/BadgeList";
import About from "./Components/About/About";
import BadgeDetails from "./Components/Badges/BadgeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={BadgeList} />
        <Route exact path="/about" component={About} />
        <Route path="/details/:id" component={BadgeDetails} />
        <img src={logo} className="App-logo" alt="logo" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

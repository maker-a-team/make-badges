// src/App.js
import { HashRouter as Router, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Header/Title";
import Footer from "./Footer/Footer";

import BadgeList from "./Badges/BadgeList";
import About from "./About/About";
import BadgeDetails from "./Badges/BadgeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={BadgeList} />
        <Route exact path="/about" component={About} />
        <Route path="/details/:id" component={BadgeDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

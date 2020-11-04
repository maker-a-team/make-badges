import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ACCOUNT } from "../../constants/routes";
// import PageNotFound from "../assets/images/PageNotFound";

class LandingPage extends Component {
  render() {
    return (
      <div id="content-wrap" className="LandingPage">
        <h1>Welcome To Make Badges</h1>
        <p>
          First Project of the Make School A-Team to provide achievement
          awards/badges to students to help gain interest in a variety of
          topics.
        </p>

        <Link to={ACCOUNT}>
          <button>Go To Your Account Page</button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;

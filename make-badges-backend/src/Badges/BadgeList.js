// src/BadgeList.js
import React from "react";
import Badge from "./Badge";
import "./BadgeList.css"

function BadgeList() {
  return (
    <div>
      <h1>Github Badge List...</h1>
      <div className="BadgeList">
        <Badge category="github" image="1-month-streak.png" />
        <Badge category="github" image="1st-pull-request.png" />
        <Badge category="github" image="1st-pull-request.png" />
        <Badge category="github" image="1st-pull-request.png" />
        <Badge category="github" image="1st-pull-request.png" />
      </div>
    </div>
  );
}

export default BadgeList;

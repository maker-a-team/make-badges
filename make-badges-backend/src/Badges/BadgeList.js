// src/BadgeList.js
import React from "react";
import Badge from "./Badge";

function BadgeList() {
  return (
    <div>
      <h1>Github Badge List...</h1>
      <Badge category="github" image="1-month-streak.png" />
      <Badge category="github" image="1st-pull-request.png" />
      <Badge />
      {/* <Badge /> */}
      {/* <Badge /> */}
    </div>
  );
}

export default BadgeList;

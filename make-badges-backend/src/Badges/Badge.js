// src/Badge.js

import React from "react";
import "./Badge.css"

function Badge(props) {
  const { name, category, image, description } = props;
  return (
    <div className="Badge">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Badge Icon"
      />
      <h1>{name}</h1>
      <div>{description}</div>
    </div>
  );
}

export default Badge;

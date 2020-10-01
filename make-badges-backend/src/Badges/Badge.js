// src/Badge.js

import React from "react";

function Badge(props) {
  const { name, category, image, description } = props;
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}images/${category}/${image}`}
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

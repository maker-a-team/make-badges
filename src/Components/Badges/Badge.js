// src/Badges/Badge.js
import { Link } from "react-router-dom";
import React from "react";
import "./Badge.css"


function Badge(props) {
  const { id, name, image, description } = props;
  return (
    <div className="Badge">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width="300"
          height="300"
          alt="Badge Icon"
        />
        <h1>{name}</h1>
      </Link>
      <div>{description}</div>
    </div>
  );
}

export default Badge;

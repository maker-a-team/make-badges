// src/Badges/BadgeDetails.js

import React from "react";

import data from "../badge-data.json";

function BadgeDetails(props) {
  const { id } = props.match.params;
  const { image, name, desc, link, category } = data[id];

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} alt="Badge"/>
      </div>

      <div>
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{category}</p>
        <a href={link}>{link}</a>
      </div>
      <br />
      <br />
    </div>
  );
}

export default BadgeDetails;

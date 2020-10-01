// src/BadgeList.js
import React from "react";
import Badge from "./Badge";
import "./BadgeList.css"
import data from "../badge-data.json";


function BadgeList() {
  const badges = data.map((id, name, category, description, imageUrl) => {

    return (
      <Badge
        key={id}
        name={name}
        category={category}
        image={image}
        description={description}
      />
    );
  });

  return (
    <div>
      <h1>Github Badge List...</h1>
      <div className="BadgeList">
        { badges }
      </div>
    </div>
  )
}

export default BadgeList;

import React from "react";
import "./CardBack.css";

const CardBack = ({ item }) => {
  return (
    <div className="card">
      <ul>
        {item.options.map((li) => {
          return <li key={li}>{li}</li>;
        })}
      </ul>
      <p>{item.name}</p>
    </div>
  );
};

export default CardBack;

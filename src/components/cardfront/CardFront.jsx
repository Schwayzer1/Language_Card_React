import React, { useState } from "react";

const CardFront = ({ item }) => {
  const [hover, setHover] = useState(false);
  const imgStyle = {
    transform: hover ? "scale(1.2)" : "scale(1)",
    transition: "transform 0.2s ease",
  };
  return (
    <div>
      <img
        style={imgStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={item.img}
        alt="img"
      />
      <p>{item.name}</p>
    </div>
  );
};

export default CardFront;

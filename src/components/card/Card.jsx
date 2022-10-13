import { useState } from "react";
import CardBack from "../cardback/CardBack";
import CardFront from "../cardfront/CardFront";
import "./Card.css";

const Card = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="card-container">
      <div onClick={() => setClicked((prev) => !prev)} className="card">
        {selectSide(clicked, item)}
      </div>
    </div>
  );
};
const selectSide = (clicked, item) => {
  if (clicked) {
    return <CardFront item={item} />;
  } else {
    return <CardBack item={item} />;
  }
};

export default Card;

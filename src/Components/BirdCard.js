import { useState } from "react";
import "./BirdCard.css";

export default function BirdCard({ bird, adoptBird }) {
  const [buttonColor, setButtonColor] = useState("lightgray");
  // const [nameColor, setNameColor] = useState("");

  return (
    <li className="card">
      <p className="birdName">
        <strong>{bird.name}</strong>
      </p>
      <p className="cost">${bird.amount}</p>
      <div className="birdImageContainer">
        <img className="birdImg" src={bird.img} alt="bird"></img>
      </div>
      <div className="adoptButtonContainer">
        <button
          onClick={() => {
            adoptBird(bird);
          }}
          onMouseOver={() => {
            setButtonColor("");
          }}
          onMouseOut={() => {
            setButtonColor("lightgray");
          }}
          style={{ backgroundColor: buttonColor }}
          className="adoptButton"
        >
          Adopt
        </button>
      </div>
    </li>
  );
}

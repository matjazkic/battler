import React, { useState, useContext } from "react";
import "./LifeCounter.css";
import { lifeContext } from "../App";

const LifeCounter = (props) => {
  const { player1, player2 } = useContext(lifeContext);
  const [lifePlayer1, dispatch1] = player1;
  console.log(lifePlayer1);
  return (
    <div>
      <div className="Player1Life">
        {" "}
        <p>{props.lifePlayer1}</p>
      </div>
    </div>
  );
};

export default LifeCounter;

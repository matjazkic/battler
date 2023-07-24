import React, { useState, useContext } from "react";
import "./LifeCounter.css";
import { lifeContext } from "../App";

const LifeCounterEnemy = (props) => {
  const { player1, player2 } = useContext(lifeContext);
  const [lifePlayer2, dispatch2] = player2;
  console.log(lifePlayer2);
  return (
    <div>
      <div className="Player2Life">
        <p>{props.lifePlayer2}</p>
      </div>
    </div>
  );
};

export default LifeCounterEnemy;

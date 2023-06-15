import React, { useState } from "react";
import "./LifeCounter.css";

const LifeCounterEnemy = (props) => {
    

  return (
    <div>
      <div className="Player2Life"><p>{props.health}</p></div>
    </div>
  );
};

export default LifeCounterEnemy;

import React, { useState } from 'react';
import './LifeCounter.css';


const LifeCounter = (props) => {
  
  

    return (
      <div>
        <div className="Player1Life"> <p>{props.health}</p></div>
            </div>
    );
};

export default LifeCounter;

// todo : Code for damage - reduce life, basicly hp = dmg-def, button for ''attack''


import React, { useState } from "react";
import './CombatAction.css'
import LifeCounter from "./LifeCounter";
import App from "../App";

const CombatAction = (props) => {
    
    
    return (
      <div className="CombatAction">
        <button className="ButtonPosition" onClick={props.combatHandler}>
          Fight!
        </button>
      </div>
    );
};

export default CombatAction;
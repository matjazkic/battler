import React, { useState } from "react";
import './ResetCombat.css'


const ResetCombat = (props) => {


    return (
      <div>
        <button className="resetButton" onClick={props.resetCombatHandler}>
          Reset Combat
        </button>
      </div>
    );
};
export default ResetCombat;
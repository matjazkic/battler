import React, { useState } from "react";
import "./ResetCombat.css";

const ResetCombat = (props) => {
  const [potionCharge, setPotionCharge] = useState(true);

  return (
    <div>
      {potionCharge && potionCharge && (
        <button
          className="resetButton"
          onClick={() => {
            props.resetCombatHandler();
            setPotionCharge(false);
          }}
        >
          Heal for 30! Only once per game!
        </button>
      )}
    </div>
  );
};
export default ResetCombat;

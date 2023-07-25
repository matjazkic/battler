import React from "react";
import classes from "./WinMessage.module.css";
import { useContext } from "react";
import { lifeContext } from "../App";

const WinMessage = () => {
  const { player1, player2, rogue, warrior } = useContext(lifeContext);
  const [lifePlayer1, dispatch1] = player1;
  const [lifePlayer2, dispatch2] = player2;
  const rogueStartingHp = rogue;
  const warriorStartingHp = warrior;

  const resetCombatHandler = () => {
    dispatch1({ type: "RESET", payload: rogueStartingHp.hp });
    dispatch2({ type: "RESET", payload: warriorStartingHp.hp });
  };

  return (
    <div className={classes.win}>
      {lifePlayer1 < 0 && lifePlayer2 < 0 ? (
        <p style={{ color: "red", "font-size": 100 }}>
          Both died! War is never the answer!
        </p>
      ) : (
        <div>
          {lifePlayer1 < 0 ? (
            <p style={{ color: "red", "font-size": 100 }}>
              Warrior wins with {lifePlayer2} hitpoints remaning!
            </p>
          ) : (
            <p style={{ color: "red", "font-size": 100 }}>
              Rogue wins with {lifePlayer1} hitpoints left!
            </p>
          )}
        </div>
      )}

      <button
        onClick={resetCombatHandler}
        style={{ "font-size": 100 }}
        className="resetButton"
      >
        Reset the game!
      </button>
    </div>
  );
};

export default WinMessage;

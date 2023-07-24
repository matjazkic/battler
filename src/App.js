import "./App.css";
import LifeCounter from "./components/LifeCounter";
import React, { useState, useReducer, useContext, createContext } from "react";
import LifeCounterEnemy from "./components/LifeCounterEnemy";
import CombatAction from "./components/CombatAction";
import ResetCombat from "./components/ResetCombat";
import ClassInfo from "./components/ClassInfo";
import LifeBar from "./components/LifeBar.js";

export const lifeContext = createContext();
export const combatReducer = (state, action) => {
  if (action.type === "DAMAGE") {
    state = state - action.payload;
    return state;
  }

  if (action.type === "HEAL") {
    state = state + 30;

    return state;
  }
  if (action.type === "RESET") {
    state = action.payload;
  }
  /*
  if (action.type === "Fireball") {
  } */
};

function App() {
  const heroes = [
    { key: 0, name: "Warrior", hp: 155, attack: 5, defense: 4, equipment: "" },
    { key: 1, name: "Rogue", hp: 150, attack: 7, defense: 3, equipment: "" },
  ];

  const warrior = {
    name: "Warrior",
    hp: 155,
    attack: 5,
    defense: 4,
    equipment: "",
  };

  const rogue = {
    name: "Rogue",
    hp: 150,
    attack: 7,
    defense: 3,
    equipment: "",
  };
  /*   const [lifePlayer1, setLifePlayer1] = useState(rogue.hp);
  const [lifePlayer2, setLifePlayer2] = useState(warrior.hp); */

  const [lifePlayer1, dispatch1] = useReducer(combatReducer, rogue.hp);
  const [lifePlayer2, dispatch2] = useReducer(combatReducer, warrior.hp);

  let randNum1 = Math.floor(Math.random() * 10) + 1;
  let randNum2 = Math.floor(Math.random() * 10) + 1;
  let rogueDamage = randNum2 + rogue.attack - warrior.defense;
  let warriorDamage = randNum1 + warrior.attack - rogue.defense;
  let remaningLife1 = Math.floor((lifePlayer1 / rogue.hp) * 100) + "%";

  /*   const combatHandler = () => {
    setLifePlayer1(lifePlayer1 - warriorDamage);
    setLifePlayer2(lifePlayer2 - rogueDamage);
  }; */

  const combatHandler = () => {
    dispatch1({ type: "DAMAGE", payload: warriorDamage });
    dispatch2({ type: "DAMAGE", payload: rogueDamage });
  };

  const resetCombatHandler = () => {
    dispatch1({ type: "HEAL" });
    dispatch2({ type: "HEAL" });
  };

  return (
    <lifeContext.Provider
      value={{
        player1: [lifePlayer1, dispatch1],
        player2: [lifePlayer2, dispatch2],
      }}
    >
      <div className="App">
        <p className="background">
          <LifeBar remaningLife1={remaningLife1} />
          <LifeCounter lifePlayer1={lifePlayer1} />
          <LifeCounterEnemy lifePlayer2={lifePlayer2} />
          <CombatAction combatHandler={combatHandler} />
          <ResetCombat resetCombatHandler={resetCombatHandler} />
          <div className="classInfo-position1">
            <ClassInfo hero={rogue} />
          </div>
          <div className="classInfo-position2">
            <ClassInfo hero={warrior} />
          </div>
          {lifePlayer1 < rogue.hp && (
            <div className="status-position">
              <p>
                {warrior.name} got hit for {rogueDamage}
              </p>
              <p>
                {rogue.name} got hit for {warriorDamage}
              </p>
            </div>
          )}
        </p>
      </div>
    </lifeContext.Provider>
  );
}

export default App;

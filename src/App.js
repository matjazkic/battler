import "./App.css";
import LifeCounter from "./components/LifeCounter";
import React, { useState } from "react";
import LifeCounterEnemy from "./components/LifeCounterEnemy";
import CombatAction from "./components/CombatAction";
import ResetCombat from "./components/ResetCombat";
import ClassInfo from "./components/ClassInfo";

function App() {
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

  const [lifePlayer1, setLifePlayer1] = useState(rogue.hp);
  const [lifePlayer2, setLifePlayer2] = useState(warrior.hp);

  let randNum1 = Math.floor(Math.random() * 10) + 1;
  let randNum2 = Math.floor(Math.random() * 10) + 1;
  let rogueDamage = randNum2 + rogue.attack - warrior.defense;
  let warriorDamage = randNum1 + warrior.attack - rogue.defense;

  const combatHandler = () => {
    setLifePlayer1(lifePlayer1 - warriorDamage);
    setLifePlayer2(lifePlayer2 - rogueDamage);
  };

  const resetCombatHandler = () => {
    setLifePlayer1(rogue.hp);
    setLifePlayer2(warrior.hp);
  };

  return (
    <div className="App">
      <p className="background">
        <LifeCounter health={lifePlayer1} />
        <LifeCounterEnemy health={lifePlayer2} />
        <CombatAction combatHandler={combatHandler} />
        <ResetCombat resetCombatHandler={resetCombatHandler} />
        <div className="classInfo-position1">
          <ClassInfo hero={rogue} />
        </div>
        <div className="classInfo-position2">
          <ClassInfo hero={warrior} />
        </div>
        <div className="status-position">
          <p>
            {warrior.name} got hit for {rogueDamage}
          </p>
          <p>
            {rogue.name} got hit for {warriorDamage}
          </p>
        </div>
      </p>
    </div>
  );
}

export default App;

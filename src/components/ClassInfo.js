import React from "react";
import './ClassInfo.css'

const ClassInfo = (props) => {
    return (<div className='class-info'> <p>{props.hero.name}</p>
  <table>
    <tr>
      <th>Attribute</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>HP:</td>
      <td>{props.hero.hp}</td>
    </tr>
    <tr>
      <td>Attack:</td>
      <td>{props.hero.attack}</td>
    </tr>
    <tr>
      <td>Defense</td>
      <td>{props.hero.defense}</td>
    </tr>
    <tr>
      <td>Equipment</td>
      <td>{props.hero.equipment}</td>
    </tr>
    </table>
    </div>
);
};
export default ClassInfo;
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "./App.css";
import characterList from "./characters";
import aptitudeList from "./aptitudes";
import cellsList from "./cells";
import logo from "./assets/BSlogo.png";
import randomCharacter from "./assets/randomLogos/randomCharacter.png";
import randomAptitude from "./assets/randomLogos/randomAptitude.png";
import randomCell from "./assets/randomLogos/randomCell.png";

function App() {
  const [character, setCharacter] = useState(randomCharacter);

  const [aptitude, setAptitude] = useState(randomAptitude);

  const [cell, setCell] = useState(randomCell);

  function Randomizer() {
    setCharacter(
      characterList[Math.floor(Math.random() * characterList.length)]
    );
    setAptitude(aptitudeList[Math.floor(Math.random() * aptitudeList.length)]);
    setCell(cellsList[Math.floor(Math.random() * cellsList.length)]);
  }

  return (
    <div className="App">
      <div className="logoDiv">
        <img src={logo} className="logo" />
      </div>
      <div className="randomizerDiv">
        <div className="characterAptitudeDiv">
          <img src={character} className="character" />
          <img src={aptitude} className="aptitude" />
        </div>
        <img src={cell} className="cell" />
        <button onClick={Randomizer} className="button">
          Randomize
        </button>
      </div>
    </div>
  );
}

export default App;

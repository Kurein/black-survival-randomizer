/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "./App.css";
import characterList from "./characters";
import { aptitudeList, filterAptitudes } from "./aptitudes";
import cellsList from "./cells";
import logo from "./assets/BSlogo.png";
import randomCharacter from "./assets/randomLogos/randomCharacter.png";
import randomAptitude from "./assets/randomLogos/randomAptitude.png";
import randomCell from "./assets/randomLogos/randomCell.png";
import Modal from "./components/lockModal";
import Echion from "./assets/characters/EchionRD.png";
import JP from "./assets/characters/JPRD.png";
import Isol from "./assets/characters/IsolRD.png";
import Cathy from "./assets/characters/CathyRD.png";
import GearRandomizer from "./components/randomGear";

function App() {
  const [character, setCharacter] = useState(randomCharacter);
  const [aptitude, setAptitude] = useState(randomAptitude);
  const [cell, setCell] = useState(randomCell);
  const JPgamestyle = ["Hack", "Hybrid", "Battle"];
  const IsolGamestyle = ["Trap", "Hybrid", "Battle"];
  const EchionGamestyle = ["King Black Mamba", "Queen Death Adder"];

  const [characterCheck, setCharacterCheck] = useState(false);
  const [aptitudeCheck, setAptitudeCheck] = useState(false);
  const [cellCheck, setCellCheck] = useState(false);
  const [modal, setModal] = useState(true);
  const [buttonUse, setButtonUse] = useState(false);

  const [characterLock, setCharacterLock] = useState(true);
  const [aptitudeLock, setAptitudeLock] = useState(true);
  const [cellLock, setCellLock] = useState(true);
  let gearLock = [randomCell, randomCell];

  function Randomizer() {
    let actualCharacter =
      characterList[Math.floor(Math.random() * characterList.length)];

    if (!characterLock) {
      actualCharacter = character;
    }

    if (characterLock) {
      setCharacter(actualCharacter);
    }
    if (aptitudeLock) {
      setAptitude(filterAptitudes(actualCharacter));
    }
    if (cellLock) {
      setCell(cellsList[Math.floor(Math.random() * cellsList.length)]);
    }
    if (buttonUse === false) {
      setButtonUse(!buttonUse);
    }
  }

  function modalHandler(str) {
    if (str === "character") {
      setCharacterCheck(true);
    }
    if (str === "aptitude") {
      setAptitudeCheck(true);
    }
    if (str === "cell") {
      setCellCheck(true);
    }

    setModal(false);
  }

  if (buttonUse) {
    gearLock = GearRandomizer(character);
  }

  return (
    <div className="App">
      <div className="logoDiv">
        <img src={logo} className="logo" />
      </div>
      <div className="randomizerDiv">
        {modal ? (
          <>
            <div className="characterAptitudeDiv">
              <img
                src={character}
                className="character"
                onClick={() => modalHandler("character")}
              />
              <div className="subCADiv">
                <img
                  src={aptitude}
                  className="aptitude"
                  onClick={() => modalHandler("aptitude")}
                />
              </div>
            </div>
            <img
              src={cell}
              className="cell"
              onClick={() => modalHandler("cell")}
            />
            {character === Echion ? (
              <h1>
                {
                  EchionGamestyle[
                    Math.floor(Math.random() * EchionGamestyle.length)
                  ]
                }
              </h1>
            ) : character === Isol ? (
              <h1>
                {
                  IsolGamestyle[
                    Math.floor(Math.random() * IsolGamestyle.length)
                  ]
                }
              </h1>
            ) : character === JP ? (
              <h1>
                {JPgamestyle[Math.floor(Math.random() * JPgamestyle.length)]}
              </h1>
            ) : null}
            <div className="gearDiv">
              {character === Cathy || character === Echion ? (
                <></>
              ) : (
                <img src={gearLock[0]} alt="weapon" />
              )}
              <img src={gearLock[1]} alt="armor" />
            </div>
            <button onClick={Randomizer} className="button">
              Randomize
            </button>
          </>
        ) : (
          <Modal
            characterCheck={characterCheck}
            setCharacterCheck={setCharacterCheck}
            aptitudeCheck={aptitudeCheck}
            setAptitudeCheck={setAptitudeCheck}
            cellCheck={cellCheck}
            setCellCheck={setCellCheck}
            setModal={setModal}
            characterList={characterList}
            aptitudeList={aptitudeList}
            cellsList={cellsList}
            randomCharacter={randomCharacter}
            randomAptitude={randomAptitude}
            randomCell={randomCell}
            setCharacterLock={setCharacterLock}
            setAptitudeLock={setAptitudeLock}
            setCellLock={setCellLock}
            setCharacter={setCharacter}
            setAptitude={setAptitude}
            setCell={setCell}
          />
        )}
      </div>
    </div>
  );
}

export default App;

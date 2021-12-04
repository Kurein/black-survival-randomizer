import { useState } from "react";
import "./App.css";
import characterList from "./characters";
import aptitudeList from "./aptitudes";
import cellsList from "./cells";
import subCell from "./subCell";

function App() {
  const [character, setCharacter] = useState(
    characterList[Math.floor(Math.random() * characterList.length)]
  );

  const [aptitude, setAptitude] = useState(
    aptitudeList[Math.floor(Math.random() * aptitudeList.length)]
  );

  const [cell, setCell] = useState(
    cellsList[Math.floor(Math.random() * cellsList.length)]
  );

  const [cell1, setCell1] = useState("");
  const [cell2, setCell2] = useState("");

  function subCells() {
    if (cell === "/static/media/Blue.cb3c78a0.png") {
      setCell1(subCell[0][0][Math.floor(Math.random() * 2)]);
      setCell2(subCell[0][1][Math.floor(Math.random() * 2)]);
    } else if (cell === "/static/media/Green.a79220ef.png") {
      setCell1(subCell[1][0][Math.floor(Math.random() * 2)]);
      setCell2(subCell[1][1][Math.floor(Math.random() * 2)]);
    } else if (cell === "/static/media/Pink.3b7cc1fb.png") {
      setCell1(subCell[2][0][Math.floor(Math.random() * 2)]);
      setCell2(subCell[2][1][Math.floor(Math.random() * 2)]);
    } else if (cell === "/static/media/Purple.db4bc78f.png") {
      setCell1(subCell[3][0][Math.floor(Math.random() * 2)]);
      setCell2(subCell[3][1][Math.floor(Math.random() * 2)]);
    } else if (cell === "/static/media/Red.3e4c14fb.png") {
      setCell1(subCell[4][0][Math.floor(Math.random() * 2)]);
      setCell2(subCell[4][1][Math.floor(Math.random() * 2)]);
    }
  }

  function Randomizer() {
    setCharacter(
      characterList[Math.floor(Math.random() * characterList.length)]
    );
    setAptitude(aptitudeList[Math.floor(Math.random() * aptitudeList.length)]);
    setCell(cellsList[Math.floor(Math.random() * cellsList.length)]);
    setCell1("");
    setCell2("");
  }

  return (
    <div className="App">
      <img src={character} alt="Character" />
      <img src={aptitude} alt="Aptitude" />
      <img src={cell} alt="Cell" />
      <div>
        <img src={cell1} />
        <img src={cell2} />
      </div>
      <button onClick={Randomizer}>Randomize!</button>
      <button onClick={subCells}>Randomize Cell</button>
    </div>
  );
}

export default App;

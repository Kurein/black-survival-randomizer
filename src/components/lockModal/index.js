/* eslint-disable jsx-a11y/alt-text */
import "./styles.css";

function Modal({
  characterCheck,
  setCharacterCheck,
  aptitudeCheck,
  setAptitudeCheck,
  cellCheck,
  setCellCheck,
  setModal,
  characterList,
  aptitudeList,
  cellsList,
  randomCharacter,
  randomAptitude,
  randomCell,
  setCharacterLock,
  setAptitudeLock,
  setCellLock,
  setCharacter,
  setAptitude,
  setCell,
}) {
  if (characterCheck) {
    return (
      <div>
        <div className="ModalDiv">
          <div className="characters">
            <img
              key={characterList.lenght}
              src={randomCharacter}
              onClick={() => {
                setCharacterLock(true);
                setCharacterCheck(false);
                setModal(true);
              }}
              className="image"
            />
            {characterList.map((elt, index) => {
              return (
                <img
                  key={index}
                  src={elt}
                  onClick={() => {
                    setCharacterLock(false);
                    setCharacterCheck(false);
                    setCharacter(elt);
                    setModal(true);
                  }}
                  className="image"
                />
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            setModal(true);
            setCharacterCheck(false);
          }}
          className="button"
        >
          Back
        </button>
      </div>
    );
  }
  if (aptitudeCheck) {
    return (
      <div>
        <div className="ModalDiv">
          <div className="characters">
            <img
              key={aptitudeList.lenght}
              src={randomAptitude}
              onClick={() => {
                setAptitudeLock(true);
                setAptitudeCheck(false);
                setModal(true);
              }}
              className="image"
            />
            {aptitudeList.map((elt, index) => {
              return (
                <img
                  key={index}
                  src={elt}
                  onClick={() => {
                    setAptitudeLock(false);
                    setAptitudeCheck(false);
                    setAptitude(elt);
                    setModal(true);
                  }}
                  className="image"
                />
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            setModal(true);
            setCharacterCheck(false);
          }}
          className="button"
        >
          Back
        </button>
      </div>
    );
  }
  if (cellCheck) {
    return (
      <div>
        <div className="ModalDiv">
          <div className="characters">
            <img
              key={cellsList.lenght}
              src={randomCell}
              onClick={() => {
                setCellLock(true);
                setCellCheck(false);
                setModal(true);
              }}
              className="image"
            />
            {cellsList.map((elt, index) => {
              return (
                <img
                  key={index}
                  src={elt}
                  onClick={() => {
                    setCellLock(false);
                    setCellCheck(false);
                    setCell(elt);
                    setModal(true);
                  }}
                  className="image"
                />
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            setModal(true);
            setCellCheck(false);
          }}
          className="button"
        >
          Back
        </button>
      </div>
    );
  }
}

export default Modal;

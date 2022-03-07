import Aiden from "../../assets/characters/AidenRD.png";
import Camilo from "../../assets/characters/CamiloRD.png";
import Dailin from "../../assets/characters/DailinRD.png";
import Emma from "../../assets/characters/EmmaRD.png";
import Hyejin from "../../assets/characters/HyejinRD.png";
import Isol from "../../assets/characters/IsolRD.png";
import Jackie from "../../assets/characters/JackieRD.png";
import Jenny from "../../assets/characters/JennyRD.png";
import JP from "../../assets/characters/JPRD.png";
import Laura from "../../assets/characters/LauraRD.png";
import Luke from "../../assets/characters/LukeRD.png";
import Nathapon from "../../assets/characters/NathaponRD.png";
import Silvia from "../../assets/characters/SilviaRD.png";
import Alex from "../../assets/characters/AlexRD.png";

function RandomMastery({ character }) {
  if (character === Aiden) {
    return <h1>{["Gun", "Blade"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Alex) {
    return (
      <h1>
        {
          ["Throw", "Stab", "Gun", "Blade", "Stab", "Blunt", "Hand"][
            Math.floor(Math.random() * 7)
          ]
        }
      </h1>
    );
  } else if (character === Camilo) {
    return <h1>{["Throw", "Stab"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Dailin) {
    return <h1>{["Hand", "Blade", "Blunt"][Math.floor(Math.random() * 3)]}</h1>;
  } else if (character === Emma) {
    return <h1>{["Throw", "Blunt"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Hyejin) {
    return <h1>{["Hand", "Bow"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Isol) {
    return <h1>{["Stab", "Bow", "Gun"][Math.floor(Math.random() * 3)]}</h1>;
  } else if (character === Jackie) {
    return <h1>{["Stab", "Blade", "Blunt"][Math.floor(Math.random() * 3)]}</h1>;
  } else if (character === Jenny) {
    return <h1>{["Stab", "Gun"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === JP) {
    return <h1>{["Blunt", "Hand"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Laura) {
    return <h1>{["Throw", "Blunt"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Luke) {
    return <h1>{["Stab", "Gun"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Nathapon) {
    return <h1>{["Hand", "Gun"][Math.floor(Math.random() * 2)]}</h1>;
  } else if (character === Silvia) {
    return <h1>{["Hand", "Blunt", "Gun"][Math.floor(Math.random() * 3)]}</h1>;
  } else {
    return <></>;
  }
}

export default RandomMastery;

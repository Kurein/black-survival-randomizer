import Accelerate from "../assets/aptitudes/Accelerate.png";
import Ambush from "../assets/aptitudes/Ambush.png";
import AmmoSupply from "../assets/aptitudes/Ammo Supply.png";
import ArrowSupply from "../assets/aptitudes/Arrow Supply.png";
import BreadSeeking from "../assets/aptitudes/Bread Seeking.png";
import CounterAttack from "../assets/aptitudes/Counter Attack.png";
import Pursuit from "../assets/aptitudes/Pursuit.png";
import Restoration from "../assets/aptitudes/Restoration.png";
import Scout from "../assets/aptitudes/Scout.png";

import Arda from "../assets/characters/ArdaRD.png";
import Aya from "../assets/characters/AyaRD.png";
import Bernice from "../assets/characters/BerniceRD.png";
import Celine from "../assets/characters/CelineRD.png";
import Hyejin from "../assets/characters/HyejinRD.png";
import Isol from "../assets/characters/IsolRD.png";
import Jenny from "../assets/characters/JennyRD.png";
import Luke from "../assets/characters/LukeRD.png";
import Nadine from "../assets/characters/NadineRD.png";
import Nathapon from "../assets/characters/NathaponRD.png";
import Rio from "../assets/characters/RioRD.png";
import Silvia from "../assets/characters/SilviaRD.png";

const gunList = [Aya, Bernice, Celine, Jenny, Luke, Nathapon, Silvia];

const bowList = [Arda, Hyejin, Nadine, Rio];

const aptitudeList = [
  Accelerate,
  Ambush,
  AmmoSupply,
  ArrowSupply,
  BreadSeeking,
  CounterAttack,
  Pursuit,
  Restoration,
  Scout,
];

function filterAptitudes(character) {
  const gunCharacter = gunList.find((char) => char === character);

  const bowCharacter = bowList.find((char) => char === character);

  if (character === Isol) {
    return aptitudeList[Math.floor(Math.random() * aptitudeList.length)];
  }

  if (gunCharacter) {
    const newAptitudeList = [
      Accelerate,
      Ambush,
      AmmoSupply,
      AmmoSupply,
      AmmoSupply,
      BreadSeeking,
      CounterAttack,
      Pursuit,
      Restoration,
      Scout,
    ];

    return newAptitudeList[Math.floor(Math.random() * newAptitudeList.length)];
  }

  if (bowCharacter) {
    const newAptitudeList = [
      Accelerate,
      Ambush,
      ArrowSupply,
      ArrowSupply,
      ArrowSupply,
      BreadSeeking,
      CounterAttack,
      Pursuit,
      Restoration,
      Scout,
    ];

    return newAptitudeList[Math.floor(Math.random() * newAptitudeList.length)];
  }

  const aptitudesListWithoutBowGun = [
    Accelerate,
    Ambush,
    BreadSeeking,
    CounterAttack,
    Pursuit,
    Restoration,
    Scout,
  ];

  return aptitudesListWithoutBowGun[
    Math.floor(Math.random() * aptitudesListWithoutBowGun.length)
  ];
}

export { aptitudeList, filterAptitudes };

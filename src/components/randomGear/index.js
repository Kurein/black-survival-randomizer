import gun from "./weapons/gun";
import blade from "./weapons/blade";
import stab from "./weapons/stab";
import bow from "./weapons/bow";
import blunt from "./weapons/blunt";
import hand from "./weapons/hand";
import thrown from "./weapons/throw";
import armor from "./armor/armor";

import Adela from "../../assets/characters/AdelaRD.png";
import Adriana from "../../assets/characters/AdrianaRD.png";
import Aiden from "../../assets/characters/AidenRD.png";
import Alex from "../../assets/characters/AlexRD.png";
import Arda from "../../assets/characters/ArdaRD.png";
import Aya from "../../assets/characters/AyaRD.png";
import Barbara from "../../assets/characters/BarbaraRD.png";
import Bernice from "../../assets/characters/BerniceRD.png";
import Bianca from "../../assets/characters/BiancaRD.png";
import Camilo from "../../assets/characters/CamiloRD.png";
import Celine from "../../assets/characters/CelineRD.png";
import Chiara from "../../assets/characters/ChiaraRD.png";
import Chloe from "../../assets/characters/ChloeRD.png";
import Dailin from "../../assets/characters/DailinRD.png";
import Daniel from "../../assets/characters/DanielRD.png";
import Elena from "../../assets/characters/ElenaRD.png";
import Eleven from "../../assets/characters/ElevenRD.png";
import Emma from "../../assets/characters/EmmaRD.png";
import Eva from "../../assets/characters/EvaRD.png";
import Fiora from "../../assets/characters/FioraRD.png";
import Hart from "../../assets/characters/HartRD.png";
import Hyejin from "../../assets/characters/HyejinRD.png";
import HyunWoo from "../../assets/characters/HyunWooRD.png";
import Isol from "../../assets/characters/IsolRD.png";
import Jackie from "../../assets/characters/JackieRD.png";
import Jan from "../../assets/characters/JanRD.png";
import Jenny from "../../assets/characters/JennyRD.png";
import Johann from "../../assets/characters/JohannRD.png";
import JP from "../../assets/characters/JPRD.png";
import Laura from "../../assets/characters/LauraRD.png";
import Lenox from "../../assets/characters/LenoxRD.png";
import Leon from "../../assets/characters/LeonRD.png";
import Luke from "../../assets/characters/LukeRD.png";
import Magnus from "../../assets/characters/MagnusRD.png";
import Mai from "../../assets/characters/MaiRD.png";
import Nadine from "../../assets/characters/NadineRD.png";
import Nathapon from "../../assets/characters/NathaponRD.png";
import Nicky from "../../assets/characters/NickyRD.png";
import Rio from "../../assets/characters/RioRD.png";
import Rosalio from "../../assets/characters/RosalioRD.png";
import Rozzi from "../../assets/characters/RozziRD.png";
import Shoichi from "../../assets/characters/ShoichiRD.png";
import Silvia from "../../assets/characters/SilviaRD.png";
import Sissela from "../../assets/characters/SisselaRD.png";
import Sua from "../../assets/characters/SuaRD.png";
import Tia from "../../assets/characters/TiaRD.png";
import William from "../../assets/characters/WilliamRD.png";
import Xiukai from "../../assets/characters/XiukaiRD.png";
import Yuki from "../../assets/characters/YukiRD.png";
import Zahir from "../../assets/characters/ZahirRD.png";

function GearRandomizer(character) {
  let weaponGear = [];

  if (character === Adela) {
    weaponGear = [weaponGear, ...blunt];
  } else if (character === Adriana) {
    weaponGear = [...thrown];
  } else if (character === Aiden) {
    weaponGear = [...blade, ...gun];
  } else if (character === Alex) {
    weaponGear = [
      ...blade,
      ...gun,
      ...stab,
      ...bow,
      ...blunt,
      ...hand,
      ...thrown,
    ];
  } else if (character === Arda) {
    weaponGear = [...bow];
  } else if (character === Aya) {
    weaponGear = [...gun];
  } else if (character === Barbara) {
    weaponGear = [...blunt];
  } else if (character === Bernice) {
    weaponGear = [...gun];
  } else if (character === Bianca) {
    weaponGear = [...stab, ...blunt];
  } else if (character === Camilo) {
    weaponGear = [...stab, ...thrown];
  } else if (character === Celine) {
    weaponGear = [...gun];
  } else if (character === Chiara) {
    weaponGear = [...blade];
  } else if (character === Chloe) {
    weaponGear = [...stab];
  } else if (character === Dailin) {
    weaponGear = [...hand, ...blade, ...blunt];
  } else if (character === Daniel) {
    weaponGear = [...stab];
  } else if (character === Elena) {
    weaponGear = [...blade];
  } else if (character === Eleven) {
    weaponGear = [...blunt];
  } else if (character === Emma) {
    weaponGear = [...thrown, ...blunt];
  } else if (character === Eva) {
    weaponGear = [...blade, ...hand, ...blunt, ...stab];
  } else if (character === Fiora) {
    weaponGear = [...stab];
  } else if (character === Hart) {
    weaponGear = [...blunt];
  } else if (character === Hyejin) {
    weaponGear = [...bow, ...hand];
  } else if (character === HyunWoo) {
    weaponGear = [...hand];
  } else if (character === Isol) {
    weaponGear = [...stab, ...bow, ...gun];
  } else if (character === Jackie) {
    weaponGear = [...blade, ...stab, ...blunt];
  } else if (character === Jan) {
    weaponGear = [...hand];
  } else if (character === Jenny) {
    weaponGear = [...stab, ...gun];
  } else if (character === Johann) {
    weaponGear = [...hand];
  } else if (character === JP) {
    weaponGear = [...hand, ...blunt];
  } else if (character === Laura) {
    weaponGear = [...blunt];
  } else if (character === Lenox) {
    weaponGear = [...blunt];
  } else if (character === Leon) {
    weaponGear = [...hand];
  } else if (character === Luke) {
    weaponGear = [...gun, ...stab];
  } else if (character === Magnus) {
    weaponGear = [...blunt];
  } else if (character === Mai) {
    weaponGear = [...stab];
  } else if (character === Nadine) {
    weaponGear = [...bow];
  } else if (character === Nathapon) {
    weaponGear = [...gun, ...hand];
  } else if (character === Nicky) {
    weaponGear = [...hand];
  } else if (character === Rio) {
    weaponGear = [...bow];
  } else if (character === Rosalio) {
    weaponGear = [...blunt];
  } else if (character === Rozzi) {
    weaponGear = [...gun];
  } else if (character === Shoichi) {
    weaponGear = [...stab];
  } else if (character === Silvia) {
    weaponGear = [...hand, ...blunt, ...gun];
  } else if (character === Sissela) {
    weaponGear = [...thrown];
  } else if (character === Sua) {
    weaponGear = [...blunt];
  } else if (character === Tia) {
    weaponGear = [...blunt];
  } else if (character === Xiukai) {
    weaponGear = [...blade];
  } else if (character === Yuki) {
    weaponGear = [...blade];
  } else if (character === William) {
    weaponGear = [...thrown];
  } else if (character === Zahir) {
    weaponGear = [...thrown];
  }

  return [
    weaponGear[Math.floor(Math.random() * weaponGear.length)],
    armor[Math.floor(Math.random() * armor.length)],
  ];
}

export default GearRandomizer;

let nickName = "dentinho";
let level = 11312;


switch (level) {
  case (level <= 1000):
    console.log(`O herói de nome ${nickName} está no nível de Ferro!`);
    break;
  case (level > 1000 && level <= 2000):
    console.log(`O herói de nome ${nickName} está no nível de Bronze!`);
    break;
  case (level > 2001 && level <= 5000):
    console.log(`O herói de nome ${nickName} está no nível de Prata!`);
    break;
  case (level > 5001 && level <= 7000):
    console.log(`O herói de nome ${nickName} está no nível de Ouro!`);
    break;
  case (level > 7001 && level <= 8000):
    console.log(`O herói de nome ${nickName} está no nível de Platina!`);
    break;
  case (level > 8001 && level <= 9000):
    console.log(`O herói de nome ${nickName} está no nível de Ascendente!`);
    break;
  case (level > 9001 && level <= 10000):
    console.log(`O herói de nome ${nickName} está no nível de Imortal!`);
    break;
  default:
     console.log(`O herói de nome ${nickName} está no nível de Radiante!`);
}


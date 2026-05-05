let win = 300;
let loss = 5;   

// Função para calcular o nível do herói
function calcularNivel() {
  // Calcular o saldo de vitorias
  let saldoVitorias = win - loss;

  let nivel;

  if (saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias >= 101) {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}


//  Ferro
let resultado1 = calcularNivel(5, 2);
console.log(`O Herói tem de saldo de ${resultado1.saldoVitorias} está no nível de ${resultado1.nivel}`);

//  Bronze
let resultado2 = calcularNivel(15, 3);
console.log(`O Herói tem de saldo de ${resultado2.saldoVitorias} está no nível de ${resultado2.nivel}`);

//  Prata
let resultado3 = calcularNivel(35, 10);
console.log(`O Herói tem de saldo de ${resultado3.saldoVitorias} está no nível de ${resultado3.nivel}`);

//  Ouro
let resultado4 = calcularNivel(65, 15);
console.log(`O Herói tem de saldo de ${resultado4.saldoVitorias} está no nível de ${resultado4.nivel}`);

//  Diamante
let resultado5 = calcularNivel(85, 20);
console.log(`O Herói tem de saldo de ${resultado5.saldoVitorias} está no nível de ${resultado5.nivel}`);

//  Lendário
let resultado6 = calcularNivel(95, 10);
console.log(`O Herói tem de saldo de ${resultado6.saldoVitorias} está no nível de ${resultado6.nivel}`);

//  Imortal
let resultado7 = calcularNivel(150, 30);
console.log(`O Herói tem de saldo de ${resultado7.saldoVitorias} está no nível de ${resultado7.nivel}`);

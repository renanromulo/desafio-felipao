let win = 100;
let loss = 5;

function calcularNivel() {
  let saldoVitorias = win - loss;  
  let ranking;
    if (saldoVitorias <= 10) {
         ranking = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
         ranking = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
         ranking = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
         ranking = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
         ranking = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
         ranking = "Lendário";
    } else if (saldoVitorias >= 101) {
         ranking = "Imortal";
    }

  return { saldoVitorias, ranking };
  
}

let resultado = calcularNivel(0,1);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.ranking}`);


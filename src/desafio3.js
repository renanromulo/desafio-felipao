class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  obterAtaque() {
    const tipoMinusculo = this.tipo.toLowerCase();

    if (tipoMinusculo === 'mago') {
      return 'magia';
    }

    if (tipoMinusculo === 'guerreiro') {
      return 'espada';
    }

    if (tipoMinusculo === 'monge') {
      return 'artes marciais';
    }

    if (tipoMinusculo === 'ninja') {
      return 'shuriken';
    }

    return 'habilidade desconhecida';
  }

  atacar() {
    const ataque = this.obterAtaque();
    const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
    console.log(mensagem);
    return mensagem;
  }
}

const heroiEntrada = new Heroi('Renan', 33, 'guerreiro');
heroiEntrada.atacar();

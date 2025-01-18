
const _velocidade = Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor) {
        if (typeof valor != 'number') return;
        if (valor <= 0 || valor >= 100) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }

};


const c1 = new Carro('Fusca');

c1[_velocidade] = 200;
console.log(c1.velocidade);
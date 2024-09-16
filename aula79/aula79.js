const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está comendo`);
    }
};

const pessoaProto = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaProto, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },

    });
}

const p1 = criaPessoa('Ale', 'Cardoso');
p1.falar();
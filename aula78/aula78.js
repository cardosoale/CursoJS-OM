function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente, valor disponível R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.despositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag.: ${this.agencia} | Conta: ${this.conta} | Saldo R$${this.saldo.toFixed(2)}`);
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente, valor disponível R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const conta = new CP(22, 33, 0);
conta.despositar(10);
conta.sacar(5);
conta.sacar(6);
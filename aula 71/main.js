// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    // Object.defineProperty(this, 'estoque', {
    //   enumerable: true, // mostra a chave
    //   value: estoque, // valor
    //   writable: true, // pode alterar
    //   configurable: true // configurável
    // });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável           
        },
        estoque: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: true, // pode alterar
            configurable: true // configurável          
        },
    });
}



const p1 = new Produto('Camiseta', 20, 3);
for (let chave in p1) {
    console.log(chave);
}
console.log(Object.keys(p1));
console.log(Object.values(p1));


console.log(p1);
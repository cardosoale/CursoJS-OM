const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// let num = [];

// for (let numero of numeros) {
//     if (numero > 10) {
//         num.push(numero);
//     }
// }
// console.log(num);

// filter

// const numerosFiltrados = numeros.filter((valor => valor > 10));

// console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Alexandre', idade: 22 },
    { nome: 'João', idade: 32 },
    { nome: 'Mauricio', idade: 21 },
    { nome: 'Andrea', idade: 18 },
    { nome: 'Alex', idade: 55 },
];

// const pessoas2 = pessoas.filter(pessoas => pessoas.nome.length >= 5);
// console.log((pessoas2));

// const pessoas3 = pessoas.filter(idade => idade.idade > 50);
// console.log((pessoas3));

const pessoas4 = pessoas.filter((nome) => nome.nome.toLowerCase().endsWith('a'));
console.log((pessoas4));

// console.log((pessoas.nome[-1]));



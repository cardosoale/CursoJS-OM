const data = new Date();

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const dataBrasil = formataData(data);

console.log(dataBrasil);

const dataString = new Date('1976-11-03T23:54:00');
dataString.setHours(dataString.getHours() - 3);
console.log(dataString);


const dataObject = new Date(1976, 11, 3, 23, 54, -3);
console.log(dataObject);
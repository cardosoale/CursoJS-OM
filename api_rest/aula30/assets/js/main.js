
const h1 = window.document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
console.log(data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }));


// const data = new Date();


// function stringDiaSemana(num) {
//     let texto;
//     switch (num) {
//         case 0:
//             texto = 'Domingo';
//             return texto;
//         case 1:
//             texto = 'Segunda';
//             return texto;
//         case 2:
//             texto = 'Terça';
//             return texto;
//         case 3:
//             texto = 'Quarta';
//             return texto;
//         case 4:
//             texto = 'Quinta';
//             return texto;
//         case 5:
//             texto = 'Sexta';
//             return texto;
//         case 6:
//             texto = 'Sábado';
//             return texto;

//         default:
//             return '';
//     }
// }

// function stringMes(num) {
//     let texto;
//     switch (num) {
//         case 1:
//             texto = 'Janeiro';
//             return texto;
//         case 2:
//             texto = 'Fevereiro';
//             return texto;
//         case 3:
//             texto = 'Março';
//             return texto;
//         case 4:
//             texto = 'Abril';
//             return texto;
//         case 5:
//             texto = 'Maio';
//             return texto;
//         case 6:
//             texto = 'Junho';
//             return texto;
//         case 7:
//             texto = 'Julho';
//             return texto;
//         case 8:
//             texto = 'Agosto';
//             return texto;
//         case 9:
//             texto = 'Setembro';
//             return texto;
//         case 10:
//             texto = 'Outubro';
//             return texto;
//         case 11:
//             texto = 'Novembro';
//             return texto;
//         case 12:
//             texto = 'Dezembro';
//             return texto;
//         default:
//             texto = '';
//             return texto;

//     }
// }



// function formataData() {
//     const dia = data.getDate().toString().padStart(2, '0');
//     const Mes = stringMes(data.getMonth() + 1);
//     const ano = data.getFullYear();
//     const diaSemana = stringDiaSemana(data.getDay());
//     const hora = data.getHours().toString().padStart(2, '0');
//     const minutos = data.getMinutes().toString().padStart(2, '0');
//     return `${diaSemana}, ${dia} de ${Mes} de ${ano} ${hora}:${minutos}`;
// }

// const dataFormatada = formataData();
// console.log(formataData());

// document.querySelector('.container h1').innerHTML = `<strong>${formataData()}</strong>`;

// const h1 = document.querySelector('.container h1');
// // const data = new Date();

// // h1.innerHTML = data.toLocaleDateString('pt-br', { timeStyle: 'fullshort', dateStyle: 'full' });

// // const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta',
//         'sexta', 'sábado'];
//     return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho',
//         'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return meses[numeroMes];
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//         ` de ${data.getFullYear()} ` +
//         `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }
// h1.innerHTML = criaData(data);
// console.log(criaData(data));
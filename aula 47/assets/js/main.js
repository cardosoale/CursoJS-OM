function meuTimer(){function mostraTimer(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaTimer() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = mostraTimer(segundos);
    }, 1000);
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;



iniciar.addEventListener('click', function (e) {
    relogio.style.color = 'black';
    clearInterval(timer);
    iniciaTimer();

});

pausar.addEventListener('click', function (e) {
    relogio.style.color = 'red';
    clearInterval(timer);

});

zerar.addEventListener('click', function (e) {
    relogio.style.color = 'black';
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});}

meuTimer()

// function relogio() {
//     function criaHoraDosSegundos(segundos) {
//       const data = new Date(segundos * 1000);
//       return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'UTC'
//       });
//     }
  
//     const relogio = document.querySelector('.relogio');
//     let segundos = 0;
//     let timer;
  
//     function iniciaRelogio() {
//       timer = setInterval(function() {
//         segundos++;
//         relogio.innerHTML = criaHoraDosSegundos(segundos);
//       }, 1000);
//     }
  
//     document.addEventListener('click', function(e) {
//       const el = e.target;
  
//       if (el.classList.contains('zerar')) {
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         relogio.classList.remove('pausado');
//         segundos = 0;
//       }
  
//       if (el.classList.contains('iniciar')) {
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         iniciaRelogio();
//       }
  
//       if (el.classList.contains('pausar')) {
//         clearInterval(timer);
//         relogio.classList.add('pausado');
//       }
//     });
//   }
//   relogio();


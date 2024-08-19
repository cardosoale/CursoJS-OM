const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>É inteiro : <strong> ${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É NaN : <strong> ${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo <strong> ${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima <strong> ${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com 2 casas decimais <strong> ${numero.toFixed(2)}</strong></p>`;

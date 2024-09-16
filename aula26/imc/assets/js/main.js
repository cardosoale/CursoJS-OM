function imc() {
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    const resultado = document.querySelector('.resultado');
    const imc = (peso / (altura ** 2)).toFixed(2);

    if (!peso || !altura || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return resultado.innerHTML = '<p class="erro"><strong>Entradas inválidas</strong></p>';
    }
    if (imc > 10 && imc <= 18.49) {
        resultado.innerHTML = `<p>Seu IMC é <strong>${imc}</strong>, e você está abaixo do peso ideal.</p>`;
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = `<p class="ideal">Seu imc é <strong>${imc}</strong>, e voce está na faixa "Ideal" de peso.</p>`;
    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = `<p>Seu imc é <strong>${imc}</strong>, e voce está com sobrepeso.</p>`;
    } else if (imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = `<p>Seu imc é <strong>${imc}</strong>, e voce está com "Obsidade Grau 1".</p>`;
    } else if (imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = `<p>Seu imc é <strong>${imc}</strong>, e voce está com "Obsidade Grau 2".</p>`;
    } else if (imc >= 40 && imc < 135) {
        resultado.innerHTML = `<p>Seu imc é <strong>${imc}</strong>, e voce está com "Obsidade Grau 3".</p>`;
    } else {
        resultado.innerHTML = `<p class="erro"><strong>Digite valores válidos</strong></p>`;
    }
    return imc;
}

// Adiciona um ouvinte de evento ao botão de envio
document.querySelector('#formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    imc(); // Chama a função imc
});
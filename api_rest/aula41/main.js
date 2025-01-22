// const maior = (x, y) => x > y ? x : y;
// console.log(maior(5, 3));

// const ePaisagem = (largura, altura) => largura > altura;
// console.log(ePaisagem(4, 3));

function fizzBuzz(num) {
    if (isNaN(num)) {
        return String(num);
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}




console.log(fizzBuzz("a"));

for (i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
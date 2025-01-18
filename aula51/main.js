function criaMutiplicador(multiplicador) {
    return (n) => {
        return n * multiplicador;
    };
}

dup = criaMutiplicador(2);

console.log((dup(5)));
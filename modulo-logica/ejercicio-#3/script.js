function sumaPares(numerosPares) {
    const suma = numerosPares
        .filter(numero => numero % 2 === 0)
        .reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);

    return suma;
}

// Arrow function example
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumaPares(array);

console.log("Suma de números pares:", resultado); 

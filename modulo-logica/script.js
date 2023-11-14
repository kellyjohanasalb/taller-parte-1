function encontrarMayor(listaNumeros) {
    if (listaNumeros.length === 0) {
        console.log('La lista está vacía.');
        return;
    }

    let maximo = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > maximo) {
            maximo = listaNumeros[i];
        }
    }

    console.log('El número más grande es:', maximo);
}

const listaDeNumeros = [3, 5, 7, 1, 8, 4, 10, 2];
encontrarMayor(listaDeNumeros);

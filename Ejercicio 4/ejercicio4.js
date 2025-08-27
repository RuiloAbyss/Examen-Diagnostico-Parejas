//ordenamiento de arreglo

let numeros = [1,34,67,3,2,6,124,56]

console.log("Arreglo original",numeros)
//Metodo de la burbuja
for (let i = 0; i < numeros.length; i++) { 
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
              let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log("Menor a mayor", numeros);
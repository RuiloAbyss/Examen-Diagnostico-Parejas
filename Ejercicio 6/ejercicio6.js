//Filtro de elementos
let numeros = [1,34,67,3,2,6,124,56]

console.log("Arreglo original",numeros)

let valor = parseInt(prompt("Ingresa un numero"))

let mayor = numeros.filter(num => num > valor)

if (mayor.length > 0) {
    console.log("Números mayores", mayor);
    alert("Números mayores que " + mayor.join(", "));
} else {
    console.log("No hay números mayores");
    alert("No hay números mayores");
}
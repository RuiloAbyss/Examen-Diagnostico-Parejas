function SumadorArreglo() {
    let cant = prompt("¿Cuántos números desea sumar?");
    let suma = 0;
    let arreglo = [];
    for (let i = 0; i < cant; i++) {
        let num = prompt("Ingrese un número:");
        arreglo.push(parseInt(num));
        suma += arreglo[i];
    }
    console.log("Números para la suma: " + arreglo);
    console.log("La suma es: " + suma);
}
SumadorArreglo();

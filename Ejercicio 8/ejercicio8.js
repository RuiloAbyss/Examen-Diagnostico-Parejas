//Busqueda de elemntos en un arreglo
let nombres = ["Jorge","Damaris","Luis","Jose","Paul"];

let nombreU = prompt("Ingresa el nombre");
console.log(nombres)

if (nombres.some(n => n.toLowerCase() === nombreU.toLowerCase())) {
    alert("Si hay coincidencia "+nombreU)
}else{
    alert("No hay coicidencia "+nombreU)
}

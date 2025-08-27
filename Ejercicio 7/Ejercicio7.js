function concatenarArreglos(){
    let nombres = ["Abisai", "Andres", "Carlos", "David", "Adan"];
    let apellidos = ["Ruiz", "Perez", "Gomez", "Lopez", "Soria"];
    let nombresCompletos = [];
    for (let i = 0; i < nombres.length; i++) {
        nombresCompletos.push(nombres[i] + " " + apellidos[i]);
    }
    console.log("Nombres: " + nombres);
    console.log("Apellidos: " + apellidos);
    console.log("Nombres con apellidos: " + nombresCompletos);
}
concatenarArreglos();
function ReversionCadena() {
    let cadRev = prompt("escribe algo...: ");
    cadRev = cadRev.split('').reverse().join('');
    console.log("cadena invertida: " + cadRev);
}
ReversionCadena();

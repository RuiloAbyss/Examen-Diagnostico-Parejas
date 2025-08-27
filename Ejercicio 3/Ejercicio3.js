function comprobarPalindromo(){
    let cad = prompt("escribe algo...: ");
    cadRev = cad.split('').reverse().join('');
    if(cad === cadRev){
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}
comprobarPalindromo();
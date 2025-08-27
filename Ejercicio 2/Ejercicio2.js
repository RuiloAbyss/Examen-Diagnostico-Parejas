function ReversionCadena(){
    let cadRev = prompt("escribe algo...: ");
    console.log("cadena original: " + cadRev); 
    cadRev = cadRev.split('').reverse().join('');
    /*split convierte la cadena en un array, reverse invierte el array y 
    join une el array en una cadena (usando '' como separador)*/
    console.log("cadena invertida: " + cadRev);
}
ReversionCadena();

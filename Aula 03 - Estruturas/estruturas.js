"use strict";

const notas = [2,8,5,0,8];

// let notasAtualizadas = [];
// const limite = notas.lenght - 1;
// for ( let indice=0; indice<=limite; indice++ ){
//     notasAtualizadas.push(notas[indice] * 10);
// }

const notasAtualizadas = notas.map ( (elemento) => elemento * 10 ); 

console.log(notas);
console.log(notasAtualizadas);
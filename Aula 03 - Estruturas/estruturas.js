"use strict";

const notas = [2,8,5,0,8];
const clientes = [{nome: "Guilherme",idade: 16,cidade: "Araçariguama"},
{nome: "Dio", idade: 666, cidade: "Japão"},
{nome: "Jotaro",idade: 36,cidade: "Japão"},
{nome: "Star Platinium",idade: 777,cidade: "Japão"},
{nome: "Za Warudo",idade:666,cidade: "Japão"}
]

// const nome = prompt("Digite seu nome");
// const idade = prompt("Digite seu idade");
// const cidade = prompt("Digite seu cidade");


// clientes.push( {"nome": nome, "idade": idade, "cidade": cidade} );

// notas.push( confirm ('Deseja se sair bem?'));
// notas.push( prompt ('adicione uma nota'));

// let notasAtualizadas = [];
// const limite = notas.lenght - 1;
// for ( let indice=0; indice<=limite; indice++ ){
//     notasAtualizadas.push(notas[indice] * 10);
// }

/* 
MAP - retorna um novo array do mesmo tamanho modificado ou não;
argumentos:
    1ºelemento
    2º índice
    3º array
*/
const notasAtualizadas = notas.map ( (elemento) => elemento * 10 );  

/* 
FILTER - retorna um novo array filtrando pela condição;
argumentos:
    1ºelemento
    2º índice
    3º array
*/

const notasAcimaDaMedia = notas.filter( nota => nota >= 5 );

/* 
REDUCE - Retorna um único valor;
argumentos:
    1° acumulador
    2º elemento
    3º índice
    4º array
*/

const notasTotal = notas.reduce ( ( acc, nota ) => (acc + nota) / notas.length - 1);
    
const notasPares100 = notas.filter ( nota => nota % 2 == 0)
                           .map( nota => nota + 100);


const exibirDados = (el, cliente, titulo="Sem Titulo") => {
    el.innerHTML += `
    <div class="card text-white bg-secondary mb-3" style="max-width: 150px; float: left; margin: 15px;">
        <div class="card-header">
            <p> ${cliente.nome} </p>
        </div>
        <div class="card-body">
            <p> ${cliente.cidade} </p>
            <p> ${cliente.idade} </p>
        </div>
    </div>
    `;
}

const $resultados = document.getElementById('resultados');

clientes.forEach( cliente => exibirDados ( $resultados, cliente ));
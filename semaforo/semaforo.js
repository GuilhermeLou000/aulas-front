"use strict";

var id01;
var id02;
var id03;

let $semaforo = document.getElementById("img");
let $botaoVermelho = document.getElementById("vermelho");
let $botaoAmarelo = document.getElementById("amarelo");
let $botaoVerde = document.getElementById("verde");
let $automatico = document.getElementById("automatico");

const vermelho = () => {
    $semaforo.src = "img/vermelho.png";
    
}
const amarelo = () => {
    $semaforo.src = "img/amarelo.png";
    
}
const verde = () => {
    $semaforo.src = "img/verde.png";
    
}

const piscaAutomatico = () =>{
    if(id01 == undefined || id02 == undefined || id03 == undefined){
    id01 = setInterval(vermelho, 3000);
    id02 = setInterval(amarelo, 6000);
    id03 = setInterval(verde, 9000);
    }
}


const parar = () => {
    clearInterval(id01);
    clearInterval(id02);
    clearInterval(id03);
    id01 = undefined;
    id02 = undefined;
    id03 = undefined;
}



$botaoVerde.addEventListener("click", verde);
$botaoVerde.addEventListener("click", parar);
$botaoVermelho.addEventListener("click", vermelho);
$botaoVermelho.addEventListener("click", parar);
$botaoAmarelo.addEventListener("click", amarelo);
$botaoAmarelo.addEventListener("click", parar);
$automatico.addEventListener("click", piscaAutomatico);
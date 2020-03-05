"use strict";

var id01 = 0;
var id02 = 0;

let $lampada = document.getElementById('lampada');
let $botaoParar = document.getElementById('interruptor');

const ligarLampada = () => {
    $lampada.src = "img/ligada.jpg";
}
const desligarLampada = () => {
    $lampada.src = "img/desligada.jpg";
}

const piscaLampada = () =>{
    if(id01 == 0 || id02 == 0){
    id01 = setInterval(ligarLampada, 100);
    id02 = setInterval(desligarLampada, 250);
    }
}

const parar = () => {
        clearInterval(id01);
        clearInterval(id02);
        id01 = 0;
        id02 = 0;
}

$lampada.addEventListener("mouseenter", ligarLampada);
$lampada.addEventListener("mouseout", desligarLampada);
$botaoParar.addEventListener("click", parar);
$lampada.addEventListener("click", piscaLampada);

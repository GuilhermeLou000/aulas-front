"use strict";

const calcularImc = (peso,altura) => peso/ (altura ** 2);

const definirEstado = (imc) => {
    let msg;
    if (imc <= 18.5 && imc >= 0){
        msg = 'Você está abaixo do peso, Atenção!';
    } else if (imc <= 24.9 && imc >= 18.6){
        msg = "Peso ideal, Parabéns!";
    } else if (imc <= 29.9 && imc >= 25){
        msg = 'Levemente acima do peso';
    }else if (imc <= 34.9 && imc >= 30) {
        msg = 'Obesidade I, Ricos de morte.';
    } else if (imc <= 39.9 && imc >= 35){
        msg = 'Obeidade II, Atenção!!';
    } else {
        msg = 'obesidade grau III, Você alcançou a Big Mom';
    }

    return msg;
}

const exibirResultado = () => {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const $resultado = document.getElementById('resultado');
    const imc = calcularImc (peso, altura);
    const estado = definirEstado (imc);

    $resultado.innerHTML = `${nome} seu IMC foi de ${imc} você está ${estado}`;
}

document.getElementById('calcular').addEventListener("click", exibirResultado);
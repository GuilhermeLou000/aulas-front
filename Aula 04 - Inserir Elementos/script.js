"use strict";

const frutas = ['mamão' , 'laranja' , 'uva', 'morango', 'abacaxi'];
const clientes = ['Ana Clara', 'João Pedro', 'Rodolfo', 'Kytsu', 'Poirtu']

const card = ( arr, tittle ="Lista") => {
    const $card = document.createElement('div');
    $card.classList.add('card');

    const elementos =  arr.join('</li><li>');
    $card.innerHTML= `
        <div class="card-tittle">
            ${tittle}
        </div>
        <div class="card-body">
            <ul>
                <li>
                    ${elementos}
                </li>
            </ul>
        </div>
    `;
    return $card;
}

const $container = document.querySelector('.container');

$container.appendChild(card(frutas, "Frutas"));
$container.appendChild(card(clientes, "Clientes"));

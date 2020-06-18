"use strict";


		const adicionarNome = ( nome ) => {

		    const $card = document.createElement('p');
		    
			$card.innerHTML= `
				 ${nome} 
		    `;

		    return $card;
		}


const adicionar = () => {

	const $nome = document.getElementById('nome').value;
	const $container = document.querySelector('.container');

	const nomeSet = localStorage.setItem ('nome', $nome);
	const nomeGet = localStorage.getItem ('nome');
	
	$container.appendChild(adicionarNome(nomeGet));
}

const excluir = () => {

	const nome = prompt('Escreva o nome que deseja Excluir:');

	localStorage.removeItem('nome', 'Guilherme');

}

document.getElementById('adicionar').addEventListener('click', adicionar);
document.getElementById('excluir').addEventListener('click', excluir);
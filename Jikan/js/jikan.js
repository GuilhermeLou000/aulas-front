"use strict";


const nome = document.getElementById("nome").value;


	const card = ( image, tittle, url) => {

	    const $card = document.createElement('div');
		$card.classList.add('card');

		$card.innerHTML= `
			<a href="${url}" target="_blanck">
	        <img class="card_image" src="${image}">
	        <div class="card_name">
	            ${tittle}
	        </div>
	        </a>
	    `;

	    return $card;
	}
	
		
	const deleteChild = async () => {

		const $card = document.querySelector('.card');
		const $container = document.querySelector('.container');
		$container.removeChild($card);

	}

	const EncontrarAnime = async ( nome ) => {

		const url = `https://api.jikan.moe/v3/search/anime?q=${nome}`;
		const $container = document.querySelector('.container');


		const getApi= await fetch ( url );
		const json= await getApi.json();
		const tamanho= json['results'].length;
		for (var i = tamanho - 1; i >= 0; i--) {
			deleteChild();	
		}
	
		for (var i = 0; i < tamanho; i++) {

			var tittle = json['results'][i]['title'];
			var url_anime = json['results'][i]['url'];
			var imagem = json['results'][i]['image_url'];

			$container.appendChild(card(imagem, tittle, url_anime));


		}
		

	}	

// document.getElementById('buscar').onClick = function(){
// 	deleteChild(tamanho, $container);
// }

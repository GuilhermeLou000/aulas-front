"use strict";


const nome = document.getElementById("nome").value;


	const EncontrarAnime = async ( nome ) => {

		const url = `https://api.jikan.moe/v3/search/anime?q=${nome}`;

		const getApi= await fetch ( url );
		const json= await getApi.json();
		console.log(json);

	}	



// document.getElementById("buscar").addEventListener("Click", EncontrarAnime());
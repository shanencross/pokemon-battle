import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonService from './pokemon-service.js';
import PokemonCard from './pokemon-card.js';
import PokemonBattle from './pokemon-battle';

let pokemonBattle = new PokemonBattle();

function makeCardFromData(pokemonData) {
	const name = pokemonData.name;
	const hp = pokemonData.hp;
	const types = pokemonData.types;
	const attacks = pokemonData.attacks;
	const weaknesses = pokemonData.weaknesses;

	return new PokemonCard(name, hp, types, attacks, weaknesses);
}

function showPokemonImage(pokemonData) {
	$('#showImage').html(`<img src='${pokemonData.images.small}'>`);
}

$('#searchButton').click(function(event) {
	event.preventDefault();

	const pokemonName = $('#name').val();
	$('#name').val('');
	
	PokemonService.getPokemonData(pokemonName).then(function(response) {
		if (response.data) {
			showPokemonImage(response.data[0]);
			$(".hiddenButton").show();
			$('#selectButton').off('click');
			$('#selectButton').click(function(event) {
				let pokemonCard = makeCardFromData(response.data[0]);
				pokemonBattle.addPokemon(pokemonCard);
				alert(`${pokemonCard.name}, I choose you!`);
			});
		}
	});
});


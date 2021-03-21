import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonService from './pokemon-service.js';
import PokemonCard from './pokemon-card.js';

function makeCardFromData(data) {
	const name = data.name;
	const hp = data.hp;
	const types = data.types;
	const attacks = data.attacks;
	const weaknesses = data.weaknesses;

	return new PokemonCard(name, hp, types, attacks, weaknesses);
}

function showPokemonImage(data) {
	$('#showImage').append(`<img src='${data[0].images.small}'>`);
}

$('#searchButton').click(function(event) {
	event.preventDefault();

	const pokemonName = $('#name').val();
	$('#name').val('');
	
	PokemonService.getPokemonData(pokemonName).then(function(response) {
		if (response.data) {
			showPokemonImage(response.data);
			let pokemonCard = makeCardFromData(response.data);
		}
	});
});

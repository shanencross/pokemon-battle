import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonService from './pokemon-service.js';

function showPokemonData(response) {
	if (response.data) {
		$('#showImage').append(`<img src='${response.data[0].images.small}'>`);
	}
}

PokemonService.getPokemonData("Mewtwo").then(function(response) {
	showPokemonData(response);
});
export default class PokemonBattle {
	constructor(firstPokemonCard, secondPokemonCard) {
		this.firstPokemon = firstPokemonCard;
		this.secondPokemon = secondPokemonCard;
	}

  addPokemon(pokemonCard) {
		if (!this.firstPokemon) {
			this.firstPokemon = pokemonCard;
		}
		else {
			this.secondPokemon = pokemonCard;
		}
	}
}
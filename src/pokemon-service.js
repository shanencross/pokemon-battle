export default class PokemonService {
	static getPokemonData(name) {
		return fetch(`https://api.pokemontcg.io/v2/cards?q=name:Mewtwo`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.catch(function(error) {
				return error;
			});
	}
}
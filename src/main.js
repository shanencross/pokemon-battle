// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let promise = fetch(`https://api.pokemontcg.io/v2/cards?q=name:Mewtwo`)
	.then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response.json();
	})
	.catch(function(error) {
		return error;
	});

promise.then(function(response) {
	if (response.data) {
		console.log(response);
	}
});

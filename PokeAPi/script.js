// API (Application Programming Interface)
// API's come in the form (Most commonly) with accessing data or performing an action.
// Accessing data, like the Pokemon API.
// Action APIs would be like AI Image generation/Machine Learning
// Some API's require keys/payment


// JSON : Java Script Object Notation

// async is short for asynchronous
async function getPokemonData(pokeName) {
    // await executes this code and does not run the next line until it is completed.
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();

    return pokeData;
}




async function displayPokemonData() {
    var pokemon = await getPokemonData(document.querySelector('#pokeSearch').value);
    var pokeDiv = document.querySelector('.pokemonData')

    pokeDiv.innerHTML = "";
    pokeDiv.innerHTML += `<h1> ${pokemon.name} </h1>`;
    pokeDiv.innerHTML += `<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`
}
const PokeApi = {}

PokeApi.getPokemonsDetail = ((pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
})

PokeApi.getPokemons = (offset =0 , limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json()) //Retorna quando consegue fazer a requisição 
    .then((jsonBody) => jsonBody.results) //Retorna quando consegue fazer a requisição
    .catch((error)   => console.log(error))  // Retorna quando não consegue fazer a requisição
    .then((pokemons) => pokemons.map(PokeApi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    fetch('https://pokeapi.co/api/v2/pokemon/2/'),
    fetch('https://pokeapi.co/api/v2/pokemon/3/'),
    fetch('https://pokeapi.co/api/v2/pokemon/4/')
]).then((results) => {
    console.log(results)
})
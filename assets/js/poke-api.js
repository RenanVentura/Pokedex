const PokeApi = {}

PokeApi.getPokemons = (offset =0 , limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json()) //Retorna quando consegue fazer a requisição 
    .then((jsonBody) => jsonBody.results) //Retorna quando consegue fazer a requisição
    .catch((error)   => console.log(error))  // Retorna quando não consegue fazer a requisição

}
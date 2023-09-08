
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Retorna uma Promisse
fetch(url)
    .then((response) => response.json()) //Retorna quando consegue fazer a requisição 
    .then((jsonBody) => console.log(jsonBody)) //Retorna quando consegue fazer a requisição
    .catch((error)   => console.log(error))  // Retorna quando não consegue fazer a requisição

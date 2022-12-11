const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154'                                 

fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        console.log(randomIndex);
        const randomPokemon = data.results[randomIndex];
        console.log(randomPokemon);



    })
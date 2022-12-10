const baseUrl = 'https://pokeapi.co/api/v2/type/'

fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        console.log(randomIndex);
        const randomPokemon = data.results[randomIndex];
        console.log(randomPokemon);



    })
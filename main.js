const baseUrl = 'https://pokeapi.co/api/v2/type/3'                                

fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // const randomPokemon = data()
        // const randomIndex = Math.floor(Math.random() * data.results.length);
        // console.log(randomIndex);
        // const randomPokemon = data.results[randomIndex];
        // console.log(randomPokemon);
        // console.log(data, TypePokemon);



    })





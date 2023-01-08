

function pokemonForm() {
     document.getElementById('pokemonquestion').addEventListener
    ('submit', (event) => {
        event.preventDefault();
    });

    const getpokemonanswer = document.getElementById('pokemonanswer');
    const pokemon = getpokemonanswer.value; 

    fetch('http://pokeapi.co/api/v2/pokemon/' + pokemon).
    then((response) => {
        return response.json();

    }).then(data => {
        displayPokemon(data);
        console.log(data)
    })
};

function displayPokemon(data) {
    const pokemonName = document.createElement('h1');
    pokemonName.innerText = data.name
    document.body.appendChild(pokemonName);

    const pokemonSprites = document.createElement('img');
    pokemonSprites.src = data.sprites.front_default;
    document.body.appendChild(pokemonSprites);
 
    const pokemonWeight = document.createElement('h3');
    pokemonWeight.innerText = "Weight: " + data.weight + " hg";
    document.body.appendChild(pokemonWeight);

    const pokemonHeight = document.createElement('h3');
    pokemonHeight.innerText = "Height: " + data.height + " dm";
    document.body.appendChild(pokemonHeight);

    const pokemonB = document.createElement('h3');
    pokemonB.innerText = data.types[0, 1];
    document.body.appendChild(pokemonB);
    
    console.log(data.types, "types")
}

    

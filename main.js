// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'                                 

// fetch(baseUrl)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

function pokemonForm() {
     document.getElementById('pokemonquestion').addEventListener
    ('submit', (event) => {
        event.preventDefault();
    });

    const getpokemonanswer = document.getElementById('pokemonanswer');
    const pokemon = getpokemonanswer.value; 
    console.log(pokemon);

    fetch('http://pokeapi.co/api/v2/pokemon/' + pokemon).
    then((response) => {
        return response.json();
    }).then(data => {
        displayPokemon(data);
    })
}

function displayPokemon(data) {
    const h1 = document.createElement('h1');
    h1.innerText = data.name
    document.body.appendChild(h1);

}

    


    // function getPokemon() {
    //     const getpokemonanswer = getElementById('pokemonanswer')
    //     pokemon = getpokemonanswer.value 
    //     console.log(pokemon)

    // }
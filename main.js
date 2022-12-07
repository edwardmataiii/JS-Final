const baseUrl = 'https://pokeapi.co/api/v2/type/'

fetch(baseUrl)
    .then(function (response ) { return response.json()})
    // .then(text => {console.log(text.count); })
    .then {return console.log(response.json())}
let output = document.querySelector('.pokemon')
let out = '';

fetch("./pokemon.json")
    .then((response) => response.json())
    .then((pokemons) => {
        console.log(pokemons);
        for (let pokemon of pokemons) {
            out += `
            <h2>${pokemon.name}</h2>
        <img src="${pokemon.img}"></img>
        
        `;
        }
        output.innerHTML = out;

    });
// testar vi fetch med async

async function getPokes() {
    try {
        let result = await fetch('https://api.chucknorris.io/jokes/random');
        let data = await result.json();
        console.log(data.value);
    } catch (error) {
        console.log(error)
    }
}

getPokes();

// fetch med .then

function fetchPokesWithThen() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(result => result.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
}

// fetchPokesWithThen();
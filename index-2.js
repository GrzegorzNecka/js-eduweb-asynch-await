let id = document.getElementById('app');

(async () => {
  try {
    const name = 'ditto';
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await data.json();
    console.log(data.json());
    id.innerText = JSON.stringify(pokemon.name);
  } catch (err) {
    id.innerText = 'nie znaleziono';
    console.log(err);
  }
})();

// promisse all

(async () => {
  const arr = await Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/ditto'),
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  ]);

  const pokemons = await arr[1].json();

  id.innerText += JSON.stringify(pokemons.name);
  console.log('pokemons', pokemons);
  console.log('arr', arr);
})();

// sposób najbardziej rozsądny

(async () => {
  const name = 'ditto';

  const getPokemon = async name => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  };

  const pokemon = await getPokemon(name).catch(err => {
    //obsługa wyjątku - catch metoda promise
    console.log(err.message);
  });

  console.log('pokemooon', pokemon?.name);
})();

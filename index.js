const id = document.getElementById('app');

(async () => {
  const name = 'ditto';
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await data.json();
  console.log(data.json());
  // console.log(pokemon);
  id.innerText = JSON.stringify(pokemon.name);
})();

// promisse all

(async () => {
  const arr = await Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/ditto'),
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  ]);
  console.log('arr', arr);
})();

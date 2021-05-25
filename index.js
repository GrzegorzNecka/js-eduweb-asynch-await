(async () => {
  const name = 'ditto';

  const handleError = fn => (...params) =>
    fn(...params).catch(err => {
      console.log(err.message);
    });

  const getPokemon = handleError(async name => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await data.json();
  });

  const pokemon = await getPokemon(name);
  console.log(pokemon?.name);
})();

// currying https://eduweb.pl/programowanie-i-www/javascript/asynchronicznosc-w-javascript-krok-po-kroku - 20 minuta

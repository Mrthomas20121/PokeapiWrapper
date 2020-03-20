const PokeApi = require('../index');

// pokemon test
// async function testPkmn() {
//   let pkmn = new PokeApi.Pokemon();
//   await pkmn.get(1);
//   console.log(pkmn);
// }

// testPkmn()


// Pokedex tests
// async function test() {
//   const dex = new PokeApi.Pokedex(2);
//   //let res = await dex.getPokemonById(0);
//   let res = await dex.getPokemon('bulbasaur');

//   let desc = await dex.getDescription();
//   console.log(desc, res)
// }
// test()

// Language test
async function testLang() {
  const lang = new PokeApi.Language(5);
  await lang.get();
  console.log(lang.names[0].language);

}
testLang()
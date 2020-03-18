# PokeapiWrapper
PokeapiWrapper is Wrapper for Pokeapi.co

# Currently Supported :
* Pokemon Api
* Pokedex Api 

# How to use it?
```js
const PokeAPI = require('pokeapijs');
async function testPkmn() {
  let pkmn = new PokeAPI.Pokemon();
  await pkmn.get(1);
  console.log(pkmn);
}

testPkmn()
```
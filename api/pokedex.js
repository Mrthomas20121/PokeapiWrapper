const fetch = require('node-fetch');

class Pokedex {
  /**
   * Create a Pokedex Instance
   * @param {Number} n the pokedex to look at(ex: 2 is kanto, 3 is hoeen, etc...)
   */
  constructor(n) {
    this.id = n;
    this.url = `https://pokeapi.co/api/v2/pokedex/${n}`;

  }
  /**
   * get a pokemon by name
   * @param {String} name the pokemon name
   */
  async getPokemonByName(name) {
    return await fetch(this.url).then(res => res.json()).then(data => data.pokemon_entries.find((arr) => arr.pokemon_species.name === name))
  }
  /**
   * Get Pokemon By Id
   * @param {Number} id 
   */
  async getPokemonById(id) {
    return await fetch(this.url).then(res => res.json()).then(data => data.pokemon_entries[id])
  }
  async getRegionName() {
    return await fetch(this.url).then(res => res.json()).then(data => data.name)
  }
  /**
   * Get the Description
   * @param {String} lang the language code.
   */
  async getDescription(lang='en') {
    return await fetch(this.url).then(res => res.json()).then(data => data.descriptions.find((d) => d.language.name === lang ))
  }
  /**
   * Return the Pokedex Id
   */
  getId() {
    return this.id;
  }
}

// Tests
async function test() {
  const dex = new Pokedex(2);
  //let res = await dex.getPokemonById(0);
  let res = await dex.getPokemonByName('bulbasaur');

  let desc = await dex.getDescription();
  console.log(desc, res)
}
test()
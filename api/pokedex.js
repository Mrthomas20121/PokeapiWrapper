const fetch = require('node-fetch');
const Pokemon = require('./pokemon');

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
   * get a pokemon by id or name
   * @param {String} arg the pokemon name or id
   */
  async getPokemon(arg) {
    let res;
    if(Number.isInteger(arg)) {
      res = await fetch(this.url).then(res => res.json()).then(data => data.pokemon_entries[arg]);
    }
    else {
      res = await fetch(this.url).then(res => res.json()).then(data => data.pokemon_entries.find((arr) => arr.pokemon_species.name === arg));
    }
    let pkmn = new Pokemon();
    await pkmn.get(res.pokemon_species.name)
    return pkmn
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

module.exports = Pokedex;
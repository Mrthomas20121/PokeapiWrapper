const fetch = require('node-fetch');

class Pokedex {
  /**
   * Create a Pokedex Instance
   * @param {Number} n the pokedex to look at(ex: 2 is kanto, 3 is hoeen, etc...)
   */
  constructor(n) {
    fetch(`https://pokeapi.co/api/v2/pokedex/${n}`).then(res => res.json()).then(data => this.data = data)
  }
  /**
   * get a pokemon by name
   * @param {String} name the pokemon name
   */
  getPokemonByName(name) {
    return this.data

  }
  /**
   * Get Pokemon By Id
   * @param {Number} id 
   */
  getPokemonById(id) {
    return this.data
  }
}


const dex = new Pokedex(2);
let res = dex.getPokemonById(0);
console.log(res);
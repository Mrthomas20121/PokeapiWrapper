const fetch = require('node-fetch');

class Pokemon {

  /**
   * @param {String} arg Pokemon Id or Pokemon Name 
   */
  async getPokemon(arg) {
    // fetch
    let json = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${arg}`).then(res => res.json()).then(data => data);

    // information
    this.information = {
      id:json.id,
      name:json.names.find((d) => d.language.name === 'en').name
    };
    // capture rate
    this.capture_rate = json.capture_rate;
    // pokemon gender rate
    this.gender_rate = json.gender_rate;
    // pokemon color
    this.color = json.color.name;
    // egg groups
    this.eggGroups = json.egg_groups;
    // text in the pokedex?
    this.text = json.flavor_text_entries.find((d) => d.language.name === 'en').flavor_text;
    // genus
    this.genus = json.genera.find((d) => d.language.name === 'en').genus;
    // name of the generation
    this.generation = json.generation.name;
    // growth rate
    this.growth_rate = json.growth_rate.name;
    // pokedex
    this.pokedex = [];
    for (const dex of json.pokedex_numbers) {
      this.pokedex.push({
        pokedex:dex.pokedex.name,
        entry:dex.entry_number
      });
    };
    // pokemon shape
    this.shape = json.shape.name;
  }
}

async function testPkmn() {
  let pkmn = new Pokemon();
  await pkmn.getPokemon(1);
  console.log(pkmn);
}

testPkmn()
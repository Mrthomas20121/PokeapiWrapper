const fetch = require('node-fetch');

class Language {
  /**
   * Create a instance of Language
   * @param {String} id language id
   */
  constructor(id) {
    this.id = id;
  }
  /**
   * @param {String} lang Language code
   */
  async get() {
    let json = await fetch(`https://pokeapi.co/api/v2/language/${this.id}`).then(res => res.json()).then(data => data);
    this.id = json.id;
    this.code = {
      'iso3166':json.iso3166,
      'iso639':json.iso639,
      name:json.name
    };
    this.names = []
    for (const name of json.names) {
      this.names.push({
        language:{
          class:new Language(name.language.name)
        },
        name:name.name
      })
    }
    this.isOfficial = true;

  }
}

module.exports = Language;
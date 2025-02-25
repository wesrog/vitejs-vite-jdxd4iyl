export const allPokemon = {
  bulbasaur: {
    name: 'bulbasaur',
  },
  ivysaur: {
    name: 'ivysaur',
  },
  venusaur: {
    name: 'venusaur',
  },
  charmander: {
    name: 'charmander',
  },
  charmeleon: {
    name: 'charmeleon',
  },
  charizard: {
    name: 'charizard',
  },
  squirtle: {
    name: 'squirtle',
  },
  wartortle: {
    name: 'wartortle',
  },
  blastoise: {
    name: 'blastoise',
  },
  caterpie: {
    name: 'caterpie',
  },
  metapod: {
    name: 'metapod',
  },
  butterfree: {
    name: 'butterfree',
  },
  weedle: {
    name: 'weedle',
  },
  kakuna: {
    name: 'kakuna',
  },
  beedrill: {
    name: 'beedrill',
  },
  pidgey: {
    name: 'pidgey',
  },
  pidgeotto: {
    name: 'pidgeotto',
  },
  pidgeot: {
    name: 'pidgeot',
  },
  rattata: {
    name: 'rattata',
  },
  raticate: {
    name: 'raticate',
  },
};

export const pages = [
  Object.entries(allPokemon).slice(0, 5),
  Object.entries(allPokemon).slice(5, 10),
  Object.entries(allPokemon).slice(10, 15),
  Object.entries(allPokemon).slice(15, 20),
];

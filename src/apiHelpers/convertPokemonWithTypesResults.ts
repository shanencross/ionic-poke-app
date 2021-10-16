import PokemonWithTypesResultsInterface from './PokemonWithTypesResultsInterface';
import SinglePokemonInterface from './SinglePokemonInterface';

const convertPokemonWithTypesResults = (results: PokemonWithTypesResultsInterface): SinglePokemonInterface[] =>
results.data.pokemon.map((pokemon) => ({
  name: pokemon.name,
  pokedexNumber: pokemon.pokedexNumber,
  pokemonTypes: pokemon.pokemonTypes.map(({pokemonType}) => pokemonType.name)
}));

export default convertPokemonWithTypesResults;
interface PokemonTypeInterface {
  name: string;
}

interface PokemonTypeContainerInterface {
  pokemonType: PokemonTypeInterface;
}

interface PokemonInterface {
  name: string;
  pokedexNumber: number;
  pokemonTypes: PokemonTypeContainerInterface[];
}

interface DataInterface {
  pokemon: PokemonInterface[];
}

interface PokemonWithTypesResultsInterface {
  data: DataInterface;
}

export default PokemonWithTypesResultsInterface;
interface PokemonTypeInterface {
  name: string
}

interface PokemonInterface {
  name: string;
  pokedex_number: number;
  types: PokemonTypeInterface[];
}

interface DataInterface {
  pokemon: PokemonInterface;
}

interface PokemonWithTypeResultsInterface {
  data: DataInterface;
}

export default PokemonWithTypeResultsInterface;
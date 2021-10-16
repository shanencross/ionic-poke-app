import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useEffect, useState } from 'react';
import pokemonWithTypesQuery from "../apiHelpers/pokemonWithTypesQuery";
import pokeApiService from "../services/poke-api-service";
import PokemonWithTypesResultsInterface from '../apiHelpers/PokemonWithTypesResultsInterface'
import SinglePokemonInterface from '../apiHelpers/SinglePokemonInterface';


interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  const [searchResults, setSearchResults] = useState<Object>({});

  const handleSearchChange = (searchInput: string) => {
    const variables = { "pokemon_type_input": searchInput };
    pokeApiService<PokemonWithTypesResultsInterface>(pokemonWithTypesQuery, variables)
      .then(results => { 
        const convertedSearchResults = convertSearchResults(results);
        console.log(convertedSearchResults);
        setSearchResults(convertedSearchResults);
       });
  }

  const convertSearchResults = (results: PokemonWithTypesResultsInterface): SinglePokemonInterface[] =>
    results.data.pokemon.map((pokemon) => ({
      name: pokemon.name,
      pokedexNumber: pokemon.pokedexNumber,
      pokemonTypes: pokemon.pokemonTypes.map(({pokemonType}) => pokemonType.name)
    }));

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className="PokeDataControl">
      <PokeSearchBar onSearchChange={handleSearchChange}/>
      <PokeDataDisplay/>
    </div>
  );
};

export default PokeDataControl;
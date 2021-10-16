import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useEffect, useState } from 'react';
import pokemonWithTypesQuery from "../apiHelpers/pokemonWithTypesQuery";
import pokeApiService from "../services/poke-api-service";
import PokemonWithTypesResultsInterface from '../apiHelpers/PokemonWithTypesResultsInterface'
import SinglePokemonInterface from '../apiHelpers/SinglePokemonInterface';
import convertPokemonWithTypesResults from '../apiHelpers/convertPokemonWithTypesResults';

interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  const [searchResults, setSearchResults] = useState<SinglePokemonInterface[]>([]);

  const handleSearchChange = (searchInput: string) => {
    const variables = { "pokemon_type_input": searchInput };
    pokeApiService<PokemonWithTypesResultsInterface>(pokemonWithTypesQuery, variables)
      .then(results => { 
        const convertedSearchResults: SinglePokemonInterface[] = convertPokemonWithTypesResults(results);
        setSearchResults(convertedSearchResults);
       });
  }

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className="PokeDataControl">
      <PokeSearchBar onSearchChange={handleSearchChange}/>
      <PokeDataDisplay pokeData={searchResults}/>
    </div>
  );
};

export default PokeDataControl;
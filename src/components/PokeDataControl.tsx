import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useEffect, useState } from 'react';
import pokemonWithTypeQuery from "../apiHelpers/pokemonWithTypeQuery";
import pokeApiService from "../services/poke-api-service";
import PokemonWithTypeResultsInterface from './../apiHelpers/PokemonWithTypeResultsInterface'


interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  const [searchResults, setSearchResults] = useState<Object>({});

  const handleSearchChange = (searchInput: string) => {
    const variables = { "pokemon_type_input": searchInput };
    pokeApiService<PokemonWithTypeResultsInterface>(pokemonWithTypeQuery, variables)
      .then(results => { 
        const convertedSearchResults = convertSearchResults(results);
        setSearchResults(convertedSearchResults);
       });
  }

  const convertSearchResults = (results: PokemonWithTypeResultsInterface): PokemonWithTypeResultsInterface => {
    console.log(results);
    return results
  }

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
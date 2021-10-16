import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useEffect, useState } from 'react';
import pokemonWithTypeQuery from "./../apiQueries/pokemonWithTypeQuery";
import pokeApiService from "../services/poke-api-service";


interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  const [searchResults, setSearchResults] = useState<Object>({});

  const handleSearchChange = (searchInput: string) => {
    const variables = { "pokemon_type_input": searchInput };
    pokeApiService<Object>(pokemonWithTypeQuery, variables)
      .then(results => { setSearchResults(results) });
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
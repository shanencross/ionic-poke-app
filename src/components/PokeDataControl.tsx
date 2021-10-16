import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
import { useEffect, useState } from 'react';
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import pokemonWithTypeQuery from "./../apiQueries/pokemonWithTypeQuery";

interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  const [searchResults, setSearchResults] = useState<string | null>(null);

  const handleSearchChange = (searchInput: string) => {
    const variables = { "pokemon_type_input": searchInput };

    fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: pokemonWithTypeQuery, variables })
    })
      .then(response => response.json())
      .then(data => setSearchResults(data));
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
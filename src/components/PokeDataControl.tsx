import PokeDataDisplay from "./PokeDataDisplay";
import PokeSearchBar from "./PokeSearchBar"
// import { useState } from 'react';
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";

interface PokeDataControlProps { }

const PokeDataControl: React.FC<PokeDataControlProps> = () => {
  // const [searchInput, setSearchInput] = useState<string | null>(null);

  const handleSearchChange = (searchInput: string) => {
    // setSearchInput(searchInput);
    
    const pokemonTypeObjectType = new GraphQLObjectType({
      name: 'pokemonType',
      fields: {
        name: {
          type: GraphQLString,
          description: 'The name of the Pokemon type'
        }
      }
    });

    const pokemonObjectType = new GraphQLObjectType({
      name: 'pokemon',
      fields: {
        name: {
          type: GraphQLString,
          description: 'The name of the Pokemon'
        },
        pokedex_number: {
          type: GraphQLInt,
          description: 'The Pokedex entry number of the Pokemon'
        },
        pokemon_types: {
          type: new GraphQLList(pokemonTypeObjectType),
          description: 'List of Pokemon types'
        },
      },
    });

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'PokemonWithType',
        fields: {
          pokemon: {
            type: new GraphQLList(pokemonObjectType),
            description: "List of pokemon with given type"
          }
        }
      })
    });

    new GraphQLObjectType({
      name: 'pokemonType',
      fields: {
        name: {
          type: GraphQLString,
          description: 'The name of the Pokemon type'
        }
      }
    });

    const source = `
    query PokemonWithType($pokemontype: String!) {
      pokemon: pokemon_v2_pokemon (
        where:  { is_default : { _eq: true } pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _iregex: $pokemontype } } } } 
        order_by: { id: asc }
      ) {
        name
        pokedex_number: pokemon_species_id
        pokemon_types: pokemon_v2_pokemontypes {
          pokemon_type: pokemon_v2_type {
            name
          }
        }
      }
    }`;
    
    const variableValues = { "pokemon_type": searchInput };

    graphql({schema, source, variableValues}).then((result) => {
      console.log(result);
    });
  }

  return (
    <div className="PokeDataControl">
      <PokeSearchBar onSearchChange={handleSearchChange}/>
      <PokeDataDisplay/>
    </div>
  );
};

export default PokeDataControl;
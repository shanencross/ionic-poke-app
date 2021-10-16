const pokemonWithTypeQuery: string = `
    query PokemonWithType($pokemon_type_input: String!) {
      pokemon: pokemon_v2_pokemon (
        where:  {
          is_default : {
            _eq: true 
          }
          pokemon_v2_pokemontypes: {
            pokemon_v2_type: {
              name: {
                _iregex: $pokemon_type_input
              }
            }
          }
        }
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

  export default pokemonWithTypeQuery;
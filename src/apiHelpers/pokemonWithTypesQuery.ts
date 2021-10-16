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
        pokedexNumber: pokemon_species_id
        pokemonTypes: pokemon_v2_pokemontypes {
          pokemonType: pokemon_v2_type {
            name
          }
        }
      }
    }`;

  export default pokemonWithTypeQuery;
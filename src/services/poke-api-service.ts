function pokeApiService<T>(query: string, variables: Object) : Promise<T> {
  return fetch('https://beta.pokeapi.co/graphql/v1beta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables })
  })
    .then(response => response.json())
    .then(data => data as T)
}


export default pokeApiService;
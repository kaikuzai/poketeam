import usePokemon from "../hooks/usePokemon";

const PokemonListPage = () => {
  const { data } = usePokemon();
  console.log(data);
  return (
    <>
      <h1>Pokemon List</h1>
      {data.map((pokemon) => (
        <ul key={pokemon.pokemon_id}>
          <h4>{pokemon.pokemon_name}</h4>
          {pokemon.pokemon_types.map((str) => (
            <h3>{str}</h3>
          ))}
        </ul>
      ))}
      <h2>end</h2>
    </>
  );
};

export default PokemonListPage;

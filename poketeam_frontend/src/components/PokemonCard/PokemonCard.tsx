import "./PokemonCard.css";
import getTypeGradient from "./TypeGradient";

interface Props {
  pokemon_name: string;
  pokemon_id: number;
  pokemon_types: string[];
  pokemon_url: string;
  selected_pokemon: number[];
  handleAdd: (pokemon_id: number) => void;
  handleDelete: (pokemon_id: number) => void;
}

const PokemonCard = ({
  selected_pokemon,
  pokemon_name,
  pokemon_id,
  pokemon_types,
  pokemon_url,
  handleDelete,
  handleAdd,
}: Props) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Nr: {pokemon_id}</h1>
          <h1>{pokemon_name}</h1>
        </div>
        <div className="image-container">
          <img className="image" src={pokemon_url} alt="" />
        </div>

        <div className="footer" style={getTypeGradient(pokemon_types[0])}>
          <div className="pokemon-types">
            {pokemon_types.map((type) => (
              <h2 key={type}>{type}</h2>
            ))}
          </div>
          <button
            className={
              selected_pokemon.includes(pokemon_id)
                ? "button-remove"
                : selected_pokemon.length === 6
                ? "button-full"
                : "button-add"
            }
            onClick={() => {
              if (!selected_pokemon.includes(pokemon_id)) {
                handleAdd(pokemon_id);
              } else {
                handleDelete(pokemon_id);
              }
            }}
          >
            {selected_pokemon.includes(pokemon_id)
              ? "Remove"
              : selected_pokemon.length === 6
              ? "Full"
              : "Add"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;

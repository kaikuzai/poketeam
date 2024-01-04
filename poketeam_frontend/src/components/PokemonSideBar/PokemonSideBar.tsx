import usePokemon from "../../hooks/usePokemon";
import "./PokemonSideBar.css";

interface Props {
  selectedPokemon: number[];
  handleDelete: (pokemon_id: number) => void;
}

const PokemonSideBar = ({ handleDelete, selectedPokemon }: Props) => {
  const { data } = usePokemon();

  return (
    <ul className="pokemon-list">
      {selectedPokemon.map((pokemon) =>
        data.map((data) =>
          pokemon == data.pokemon_id ? (
            <div className="poke-display">
              <div className="poke-info">
                <img
                  className="pokemon-image"
                  src={data.pokemon_url}
                  alt=""
                  width={25}
                  height={25}
                />
                <h3>{data.pokemon_name}</h3>
              </div>
              <div className="poke-delete">
                <button
                  onClick={() => handleDelete(data.pokemon_id)}
                  className="delete-button"
                >
                  {" "}
                  delete{" "}
                </button>
              </div>
            </div>
          ) : (
            ""
          )
        )
      )}
    </ul>
  );
};

export default PokemonSideBar;

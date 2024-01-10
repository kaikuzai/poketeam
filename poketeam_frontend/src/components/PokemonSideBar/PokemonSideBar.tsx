import { useSelector } from "react-redux";
import usePokemon from "../../hooks/usePokemon";
import "./PokemonSideBar.css";
import { Rootstate } from "../../state/store";
import { useDispatch } from "react-redux";
import { removePokemon } from "../../state/poketeam/poketeamSlice";

const PokemonSideBar = () => {
  const { data } = usePokemon();

  const selectedPokemon = useSelector(
    (state: Rootstate) => state.poketeam.selectedPokemon
  );
  const dispatch = useDispatch();

  return (
    <ul className="pokemon-list">
      {selectedPokemon.map((pokemon) =>
        data.map((data) =>
          pokemon == data.pokemon_id ? (
            <div className="poke-display">
              <div className="poke-info">
                <img
                  className="pokemon-sidebar-image"
                  src={data.pokemon_url}
                  alt=""
                  width={25}
                  height={25}
                />
                <h3>{data.pokemon_name}</h3>
              </div>
              <div className="poke-delete">
                <button
                  onClick={() => dispatch(removePokemon(data.pokemon_id))}
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

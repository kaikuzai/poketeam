import { NavLink } from "react-router-dom";
import "./PokemonCard.css";
import getTypeGradient from "./TypeGradient";

import { addPokemon, removePokemon } from "../../state/poketeam/poketeamSlice";
import { useSelector } from "react-redux";
import { Rootstate } from "../../state/store";
import { useDispatch } from "react-redux";

interface Props {
  pokemon_name: string;
  pokemon_id: number;
  pokemon_types: string[];
  pokemon_url: string;
  selected_pokemon: number[];
}

const PokemonCard = ({
  selected_pokemon,
  pokemon_name,
  pokemon_id,
  pokemon_types,
  pokemon_url,
}: Props) => {
  const selectedPokemon = useSelector(
    (state: Rootstate) => state.poketeam.selectedPokemon
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Nr: {pokemon_id}</h1>
          <NavLink to={`/detail/${pokemon_id}`}>
            {" "}
            <h1>{pokemon_name}</h1>{" "}
          </NavLink>
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
          <div className="action-buttons">
            <NavLink to={`/detail/${pokemon_id}`}>
              <button className="info-button"> Info</button>
            </NavLink>
            <button
              className={
                selectedPokemon.includes(pokemon_id)
                  ? "button-remove"
                  : selected_pokemon.length === 6
                  ? "button-full"
                  : "button-add"
              }
              onClick={() => {
                if (!selectedPokemon.includes(pokemon_id)) {
                  console.log("click registered add");
                  dispatch(addPokemon(pokemon_id));
                } else {
                  console.log("click registered remove");
                  dispatch(removePokemon(pokemon_id));
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
      </div>
    </>
  );
};

export default PokemonCard;

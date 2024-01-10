import { useParams, NavLink } from "react-router-dom";
import "./PokemonDetailPage.css";
import useSinglePokemon from "../../../hooks/useSinglePokmeon";

const PokemonDetailPage = () => {
  const { pokemon_id } = useParams();

  const numeric_pokemon_id = Number(pokemon_id);

  const { data } = useSinglePokemon(numeric_pokemon_id);
  return (
    <>
      <div className="pokemon-navigation-container">
        <NavLink to={"/"}> Back</NavLink>
      </div>
      <div className="pokemon-detail-container">
        <div className="pokemon-side-info-container">
          <div className="pokemon-card-container">
            <div className="pokemon-card-title">
              <h1 className="pokemon-number">Nr. {data?.pokemon_id}</h1>
              <h1 className="pokemon-name">{data?.pokemon_name}</h1>
            </div>
            <div className="pokemon-card-image-container">
              <img className="pokemon-card-image" src={data?.pokemon_url}></img>
            </div>
          </div>
          <div className="pokemon-specific-details-container">
            <div className="pokemon-types">
              <h2>Type</h2>
              {data?.pokemon_types.map((type) => (
                <h2>{type}</h2>
              ))}
            </div>
            <div className="pokemon-abilites">
              <h2>
                {data?.pokemon_abilities.length === 1 ? "Ability" : "Abilities"}
              </h2>
              {data?.pokemon_abilities.map((ability) => (
                <h2>{ability}</h2>
              ))}
            </div>
          </div>
        </div>
        <div className="pokemon-main-info-container">
          <div className="pokemon-description-container">
            Pokemon Description
          </div>
          <div className="pokemon-evolution-container">Pokemon Evolutions</div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailPage;

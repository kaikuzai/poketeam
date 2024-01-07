import { useParams } from "react-router-dom";
import "./PokemonDetailPage.css";
import useSinglePokemon from "../../../hooks/useSinglePokmeon";

const PokemonDetailPage = () => {
  const { pokemon_id } = useParams();

  const numeric_pokemon_id = Number(pokemon_id);

  const { data } = useSinglePokemon(numeric_pokemon_id);
  return (
    <>
      <h1 className="intro-text">Detail page {pokemon_id}</h1>
      <div className="pokemon-container">
        <img className="pokemon-image" src={data?.pokemon_url}></img>;
      </div>
    </>
  );
};

export default PokemonDetailPage;

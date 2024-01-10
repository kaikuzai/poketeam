import { useEffect, useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonFilter from "../PokemonFilter/PokemonFilter";
import "./PokemonGrid.css";
import { useSelector } from "react-redux";
import { Rootstate } from "../../state/store";

const PokemonGrid = () => {
  const { data } = usePokemon();

  const selectedPokemon = useSelector(
    (state: Rootstate) => state.poketeam.selectedPokemon
  );

  const [selectedType, setSelectedType] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const [filteredData, setFilteredData] = useState(data);

  const typeChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    console.log(selectedOption ? selectedOption : null);
    setSelectedType(selectedOption);
  };

  const clearType = () => {
    setSelectedType(null);
  };

  useEffect(() => {
    if (selectedType !== null) {
      const selectedPokemon = data.filter((pokemon) =>
        pokemon.pokemon_types.includes(selectedType.value)
      );
      setFilteredData(selectedPokemon);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedType]);

  return (
    <>
      <div className="poke-filter">
        <PokemonFilter
          selectedType={selectedType}
          handleTypeChange={typeChange}
        />

        <button
          className={selectedType === null ? "clear-btn-inactive" : "clear-btn"}
          onClick={clearType}
        >
          {" "}
          clear
        </button>
      </div>

      <div className="grid">
        {filteredData.map((pokemon) => (
          <PokemonCard
            key={pokemon.pokemon_id}
            pokemon_id={pokemon.pokemon_id}
            pokemon_name={pokemon.pokemon_name}
            selected_pokemon={selectedPokemon}
            pokemon_types={pokemon.pokemon_types}
            pokemon_url={pokemon.pokemon_url}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonGrid;

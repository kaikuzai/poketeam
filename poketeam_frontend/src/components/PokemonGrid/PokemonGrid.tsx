import { useEffect, useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonFilter from "../PokemonFilter/PokemonFilter";
import "./PokemonGrid.css";

interface Props {
  addPokemon: (pokemon_id: number) => void;
  removePokemon: (pokemon_id: number) => void;
  selectedPokemon: number[];
}

const PokemonGrid = ({ removePokemon, addPokemon, selectedPokemon }: Props) => {
  const { data } = usePokemon();

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
            handleDelete={(pokemon_id) => {
              removePokemon(pokemon_id);
            }}
            handleAdd={(pokemon_id) => {
              addPokemon(pokemon_id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonGrid;

import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import { useState } from "react";

function AppIndex() {
  const [selectedPokemon, setSelectedPokemon] = useState<number[]>([]);

  const addPokemon = (pokemon_id: number) => {
    console.log("click has been registered", pokemon_id);
    if (!selectedPokemon.includes(pokemon_id)) {
      if (selectedPokemon.length < 6) {
        setSelectedPokemon([...selectedPokemon, pokemon_id]);
      }
    }
  };

  const deletePokemon = (pokemon_id: number) => {
    const pokemonList = [...selectedPokemon];

    setSelectedPokemon(pokemonList.filter((number) => number != pokemon_id));
  };

  const clearPokemon = () => {
    setSelectedPokemon([]);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-sidebar">
          <SideBar
            handleClear={clearPokemon}
            handleDelete={deletePokemon}
            selectedPokemon={selectedPokemon}
          />
        </div>
        <div className="main-selector">
          <PokemonGrid
            removePokemon={deletePokemon}
            addPokemon={addPokemon}
            selectedPokemon={selectedPokemon}
          />
        </div>
      </div>
    </>
  );
}

export default AppIndex;

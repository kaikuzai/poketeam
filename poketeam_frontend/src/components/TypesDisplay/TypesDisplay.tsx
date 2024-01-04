import { useEffect, useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import "./TypesDisplay.css";

interface Props {
  selectedPokemon: number[];
}

const TypesDisplay = ({ selectedPokemon }: Props) => {
  const [types, setTypes] = useState<any>([]);

  const { data } = usePokemon();

  useEffect(() => {
    const selectedPokemonTypes = selectedPokemon.flatMap(
      (selectedPokemonId) => {
        const selPokemon = data.find(
          (pokemon) => pokemon.pokemon_id === selectedPokemonId
        );
        return selPokemon
          ? selPokemon.pokemon_types.map((type) => type.toLowerCase())
          : [];
      }
    );
    const tempTypes = [...types, selectedPokemonTypes];
    setTypes([...new Set(tempTypes)]);
    console.log(types);
  }, [selectedPokemon, data]);
  return (
    <>
      <h1 className="text">{types}</h1>
    </>
  );
};

export default TypesDisplay;

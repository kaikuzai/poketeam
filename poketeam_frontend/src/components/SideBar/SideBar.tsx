import PokemonSideBar from "../PokemonSideBar/PokemonSideBar";
// import TypesDisplay from "../TypesDisplay/TypesDisplay";
import "./SideBar.css";

interface Props {
  selectedPokemon: number[];
  handleDelete: (pokemon_id: number) => void;
  handleClear: () => void;
}

const SideBar = ({ handleClear, handleDelete, selectedPokemon }: Props) => {
  return (
    <>
      <div className="side-bar">
        <PokemonSideBar
          handleDelete={handleDelete}
          selectedPokemon={selectedPokemon}
        />
        {selectedPokemon.length !== 0 ? (
          <div className="button-field">
            <button
              disabled={selectedPokemon.length === 0}
              className="clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className={
                selectedPokemon.length === 6
                  ? "save-button-active"
                  : "save-button-inactive"
              }
            >
              {" "}
              {selectedPokemon.length === 6 ? "Save!" : "save"}{" "}
            </button>
          </div>
        ) : (
          <div className="addition-div">
            <h3 className="addition-text"> Add a pokemon! </h3>
          </div>
        )}

        {/* <TypesDisplay selectedPokemon={selectedPokemon} /> */}
      </div>
    </>
  );
};

export default SideBar;

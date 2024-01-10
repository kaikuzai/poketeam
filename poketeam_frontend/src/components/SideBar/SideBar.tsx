import { useSelector } from "react-redux";
import PokemonSideBar from "../PokemonSideBar/PokemonSideBar";
// import TypesDisplay from "../TypesDisplay/TypesDisplay";
import { Rootstate } from "../../state/store";
import "./SideBar.css";
import { useDispatch } from "react-redux";
import { clearPokemon } from "../../state/poketeam/poketeamSlice";

const SideBar = () => {
  const selectedPokemon = useSelector(
    (state: Rootstate) => state.poketeam.selectedPokemon
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="side-bar">
        <PokemonSideBar />
        {selectedPokemon.length !== 0 ? (
          <div className="button-field">
            <button
              disabled={selectedPokemon.length === 0}
              className="clear-button"
              onClick={() => dispatch(clearPokemon())}
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

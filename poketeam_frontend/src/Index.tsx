import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";

function AppIndex() {
  return (
    <>
      <div className="main-container">
        <div className="main-sidebar">
          <SideBar />
        </div>
        <div className="main-selector">
          <PokemonGrid />
        </div>
      </div>
    </>
  );
}

export default AppIndex;

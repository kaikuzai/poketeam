import React from "react";
import PokemonGrid from "./components/PokemonGrid/PokemonGrid";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const AppIndex: React.FC = () => {
  return (
    <div className="page-container">
      <div className="nav-bar-container">
        <NavBar />
      </div>
      <div className="main-container">
        <div className="main-sidebar">
          <SideBar />
        </div>
        <div className="main-selector">
          <PokemonGrid />
        </div>
      </div>
    </div>
  );
};

export default AppIndex;

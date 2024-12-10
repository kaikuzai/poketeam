import React from "react";
import TeamTile from "../TeamTile/TeamsTile";
import "./TeamsSection.css";

const TeamsSection: React.FC = () => {
  // Mock data for Pokémon teams
  const teams = [
    { id: 1, name: "Team Rocket", pokemons: ["Pikachu", "Bulbasaur"] },
    { id: 2, name: "Elite Four", pokemons: ["Charizard", "Squirtle"] },
    { id: 3, name: "Mystic Team", pokemons: ["Eevee", "Snorlax"] },
  ];

  return (
    <div className="teams-section">
      <h2>Your Pokémon Teams</h2>
      <div className="teams-grid">
        {teams.map((team) => (
          <TeamTile key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;

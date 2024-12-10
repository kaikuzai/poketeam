import React from "react";
import "./TeamsTile.css";

interface TeamTileProps {
  team: {
    id: number;
    name: string;
    pokemons: string[];
  };
}

const TeamTile: React.FC<TeamTileProps> = ({ team }) => {
  return (
    <div className="team-tile">
      <h3>{team.name}</h3>
      <ul>
        {team.pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamTile;

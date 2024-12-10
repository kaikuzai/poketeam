import React from "react";
import "./InfoSection.css";

const InfoSection: React.FC = () => {
  return (
    <div className="info-section">
      <h2>Trainer Info</h2>
      <p>Welcome, Trainer!</p>
      <p>Here you can find all your Pokémon teams.</p>
      <p><strong>Teams Count:</strong> <span id="teams-count">3</span></p>
      <p><strong>Trainer Level:</strong> <span id="trainer-level">10</span></p>
    </div>
  );
};

export default InfoSection;

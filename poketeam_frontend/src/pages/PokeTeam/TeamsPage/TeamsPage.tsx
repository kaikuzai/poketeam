import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import TeamsSection from "../TeamsSection/TeamsSection";

import "./TeamsPage.css";

const TeamsPage: React.FC = () => {
  return (
    <div className="teams-page">
      <InfoSection />
      <TeamsSection />
    </div>
  );
};

export default TeamsPage;

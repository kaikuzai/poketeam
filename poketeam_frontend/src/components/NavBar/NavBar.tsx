import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
import useLogoutUser from "../../hooks/User/useLogout";
import { Rootstate } from "../../state/store";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useLogoutUser();

  // Assume `user` is stored in the Redux store under `authorization`
  const user = useSelector((state: Rootstate) => state.authorization.authorization.username);
  const isAuthorized = useSelector((state: Rootstate) => state.authorization.authorization.isAuthenticated);

  const handleAccountStatusButton = async () => {
    if(isAuthorized){
      await logout(); 
      navigate("/login");
    } else {
      navigate("/login")
    }
  };

  const handleViewTeams = () => {
    navigate("/auth-check");
  };

  return (
    <div className="nav-container">
      <div className="nav-content">
        {!isAuthorized &&  
        <span className="nav-greeting">
          Hey Trainer!
        </span>}

        {isAuthorized &&  
        <span className="nav-greeting">
          Hey Trainer <strong> {user} </strong>!
        </span>}


        <div className="nav-buttons">
          <button className="nav-button" onClick={handleViewTeams} disabled={!isAuthorized}>
            View Teams
          </button>
          <button className="nav-button logout" onClick={handleAccountStatusButton}>
            {isAuthorized ? 'logout' : 'login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
import useLogoutUser from "../../hooks/UserAuthentication/useLogout";
import { Rootstate } from "../../state/store";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useLogoutUser();

  // Assume `user` is stored in the Redux store under `authorization`
  const user = useSelector((state: Rootstate) => state.authorization.authorization.username);
  const isAuthorized = useSelector((state: Rootstate) => state.authorization.authorization.isAuthenticated);

  const handleAccountStatusButton = async () => {
    if (isAuthorized) {
      await logout();
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const handleViewTeams = () => {
    navigate("/auth-check");
  };

  return (
    <div className="nav-container">
      {/* Greeting centered */}
      <span className="nav-greeting">
        {!isAuthorized ? "Hey Trainer!" : `Hey Trainer ${user || ""}!`}
      </span>

      {/* Buttons aligned to the right */}
      <div className="nav-buttons">
        <button className="nav-button" onClick={handleViewTeams}>
          View Teams
        </button>
        <button className="nav-button logout" onClick={handleAccountStatusButton}>
          {isAuthorized ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;

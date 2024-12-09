import Cookies from "js-cookie";
import useAuthorizationCheck from "../../hooks/User/useAuthorization";
import { useEffect, useState } from "react";




const AuthenticationCheck = () => {
  const [authorizationStatus, setAuthorizationStatus] = useState<any>(); 
 
  const {fetchAuthorization} = useAuthorizationCheck()
  
  useEffect(() => {
      const getStatus = async () => {
      const response = await fetchAuthorization(); 
      setAuthorizationStatus(response)
    };
    getStatus(); 
  },[])
 
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          backgroundColor: "#ffffff", 
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
          textAlign: "center", 
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Authentication Status</h2>
        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.5" }}>
          Here we have the CSRF cookie: <strong>{Cookies.get("csrftoken") || "Not found"}</strong>
        </p>
        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.5" }}>
          The user who is making this request: <strong>{authorizationStatus? authorizationStatus.response : 'nddfaefull'}</strong>
        </p>
        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.5" }}>
          Additional authentication info can go here.
        </p>
      </div>
    </div>
  );
};

export default AuthenticationCheck;

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { fetchOrReplaceCSRF } from "../../services/Cookies/CSRFToken";

const CSRFTokenCheck = () => {
  const [token, setToken] = useState<string>()

  const removeToken = async () => {
    Cookies.remove('csrftoken')
    setToken('')
  }
  
  const addToken = async () => {
    Cookies.set('csrftoken', 'abc')
    const newToken = Cookies.get('csrftoken')
    setToken(newToken);
  }

  useEffect(() => {
    fetchOrReplaceCSRF(); 
  },[token])
 
  
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
        <h2 style={{ marginBottom: "20px", color: "#333" }}>CSRF Token Status</h2>
        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.5", wordBreak: 'break-word' }}>
          Here we have the CSRF cookie: <strong>{Cookies.get("csrftoken") || "Not found"}</strong>
        </p>
        
  <button
    onClick={() => {
      addToken();
    }}
    style={{
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Add token 
  </button>
  <button
    onClick={() => {
        removeToken();
    }}
    style={{
      padding: "10px 20px",
      backgroundColor: "#dc3545",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Remove Token
  </button>
</div>

      </div>
  );
};

export default CSRFTokenCheck;
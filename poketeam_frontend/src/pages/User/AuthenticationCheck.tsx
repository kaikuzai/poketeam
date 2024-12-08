import Cookies from "js-cookie";

// DOESN'T WORK PROPERLY 
const getCSRFToken = () => {
    const match = document.cookie.match(/(^|;)\s*csrf_token=([^;]*)/);
    return match ? match[2] : null;
  };

const AuthenticationCheck = () => {
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
          Here we have the CSRF cookie: <strong>{ getCSRFToken() || "Not found"}</strong>
        </p>
        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.5" }}>
          Additional authentication info can go here.
        </p>
      </div>
    </div>
  );
};

export default AuthenticationCheck;

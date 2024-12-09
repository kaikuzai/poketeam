import React, { useState } from "react";
import useLoginUser from "../../hooks/User/useLogin";
import CSRFToken from "../../services/CSRFToken";
import { useNavigate } from "react-router-dom";

interface Response {
  response: string
}

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<Response>();
  const { login } = useLoginUser();

  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading
    console.log("Submitted:", { username, password });

    // Need to impliment a way to clear data before request 
    await login(username, password);
    const response = await login(username, password);
    await console.log('response value',response); 
    setResponse(response)
    if (response.response == 'Succeeded') {
      navigate("/")
    }
  };

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
      <form
        onSubmit={handleSubmit} // Correctly call handleSubmit
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          padding: "30px",
          backgroundColor: "#ffffff", // White background for the form
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CSRFToken />
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#4a4a4a",
            fontSize: "24px",
          }}
        >
          Login
        </h2>

        {/* Username Input */}
        <label
          style={{
            marginBottom: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          autoComplete="new-username"
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#ffffff", // White input background
            color: "#000", // Black text
            fontSize: "14px",
          }}
          required
        />

        {/* Password Input */}
        <label
          style={{
            marginBottom: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoComplete="new-password"
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#ffffff", // White input background
            color: "#000", // Black text
            fontSize: "14px",
          }}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!username || !password} 
          style={{
            padding: "10px",
            backgroundColor: username && password  ? "#28a745" : "#ccc", 
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: username && password ? "pointer" : "not-allowed",
            transition: "background-color 0.3s",
          }}
        >
          Login
        </button>

        {response && (
          <p
            style={{
              color: "green",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {response.response}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

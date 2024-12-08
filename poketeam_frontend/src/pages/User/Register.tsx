import React, { useState } from "react";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== repassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registration Data:", { username, password, repassword });
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
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          padding: "30px",
          backgroundColor: "#ffffff", // White background
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#4a4a4a",
            fontSize: "24px",
          }}
        >
          Register
        </h2>

        {/* Username Field */}
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

        {/* Password Field */}
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

        {/* Repassword Field */}
        <label
          style={{
            marginBottom: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Confirm Password
        </label>
        <input
          type="password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          placeholder="Re-enter your password"
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
          disabled={!username || !password || !repassword} // Disabled until all fields are filled
          style={{
            padding: "10px",
            backgroundColor: username && password && repassword ? "#28a745" : "#ccc", // Green when all fields are filled
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: username && password && repassword ? "pointer" : "not-allowed", // Pointer if enabled
            transition: "background-color 0.3s",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
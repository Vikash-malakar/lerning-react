import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#ffffff" : "#000000",
    transition: "0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: darkMode ? "#ffffff" : "#000000",
    color: darkMode ? "#000000" : "#ffffff",
  };

  return (
    <div style={containerStyle}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>

      <button style={buttonStyle} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
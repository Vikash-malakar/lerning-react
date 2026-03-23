import React, { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: dark ? "#121212" : "#ffffff",
    color: dark ? "#ffffff" : "#000000",
    fontFamily: "Arial"
  };

  return (
    <div style={containerStyle}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: "10px 20px",
          fontSize: "16px"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
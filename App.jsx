import React, { useState } from "react";

export default function App() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Toggle App</h1>

      <h2>{status ? "ON " : "OFF "}</h2>

      <button
        onClick={toggleStatus}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Toggle
      </button>
    </div>
  );
}
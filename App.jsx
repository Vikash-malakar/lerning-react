import React, { useState, useEffect } from "react";

export default function App() {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Keyboard Key Detector</h1>

      <h2>Pressed Key: {key}</h2>
    </div>
  );
}
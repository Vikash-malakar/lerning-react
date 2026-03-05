import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    const random = Math.floor(Math.random() * 100);
    setNumber(random);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Random Number Generator 🎲</h1>

      <h2>{number}</h2>

      <button
        onClick={generateNumber}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Generate Number
      </button>
    </div>
  );
}
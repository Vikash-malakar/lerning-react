import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    if (number % 2 === 0) {
      setResult("Even Number");
    } else {
      setResult("Odd Number");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Even or Odd Checker</h1>

      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <br /><br />

      <button
        onClick={checkNumber}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Check
      </button>

      <h2>{result}</h2>
    </div>
  );
}
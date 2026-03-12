import React, { useState } from "react";

export default function App() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const checkNumber = () => {
    if (parseInt(guess) === randomNumber) {
      setResult("Correct Guess!");
    } else {
      setResult("Wrong! Try again.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Number Guessing Game</h1>

      <p>Guess a number between 1 and 10</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
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
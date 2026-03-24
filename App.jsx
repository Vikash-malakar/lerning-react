import React, { useState } from "react";

export default function App() {
  const quotes = [
    "Believe in yourself",
    "Never give up",
    "Stay positive",
    "Work hard, dream big",
    "Success is coming",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Quote Generator</h1>

      <h2>"{quote}"</h2>

      <button
        onClick={generateQuote}
        style={{
          padding: "10px 20px",
          fontSize: "16px"
        }}
      >
        New Quote
      </button>
    </div>
  );
}
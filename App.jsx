import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const toUpper = () => {
    setText(text.toUpperCase());
  };

  const toLower = () => {
    setText(text.toLowerCase());
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Text Converter</h1>

      <textarea
        rows="4"
        cols="40"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <br /><br />

      <button
        onClick={toUpper}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        Uppercase
      </button>

      <button
        onClick={toLower}
        style={{ padding: "10px 20px" }}
      >
        Lowercase
      </button>
    </div>
  );
}
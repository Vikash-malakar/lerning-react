import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Copy Text App</h1>

      <textarea
        rows="4"
        cols="40"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px" }}
      />

      <br /><br />

      <button
        onClick={handleCopy}
        style={{ padding: "10px 20px" }}
      >
        Copy Text
      </button>

      {copied && <p>Text Copied!</p>}
    </div>
  );
}
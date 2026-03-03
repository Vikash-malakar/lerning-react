import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1>Character Counter 📝</h1>

      <textarea
        rows="5"
        cols="40"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px" }}
      />

      <h3>Characters: {text.length}</h3>
      <h3>Words: {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</h3>
    </div>
  );
}
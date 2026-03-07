import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Greeting App 👋</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <h2>Hello {name}!</h2>
    </div>
  );
}
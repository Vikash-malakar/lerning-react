import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Color Changer App 🎨</h1>

      <button
        onClick={() => setColor("red")}
        style={{ margin: "5px" }}
      >
        Red
      </button>

      <button
        onClick={() => setColor("green")}
        style={{ margin: "5px" }}
      >
        Green
      </button>

      <button
        onClick={() => setColor("blue")}
        style={{ margin: "5px" }}
      >
        Blue
      </button>

      <button
        onClick={() => setColor("white")}
        style={{ margin: "5px" }}
      >
        Reset
      </button>
    </div>
  );
}
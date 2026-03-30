import React, { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);

  const increase = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const reset = () => {
    setProgress(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Progress Bar</h1>

      <div
        style={{
          width: "300px",
          height: "20px",
          border: "1px solid #000",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            width: progress + "%",
            height: "100%",
            backgroundColor: "green",
            transition: "0.3s"
          }}
        ></div>
      </div>

      <h2>{progress}%</h2>

      <button onClick={increase} style={{ margin: "5px" }}>
        Increase
      </button>

      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}
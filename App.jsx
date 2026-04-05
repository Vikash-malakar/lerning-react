import React, { useState, useEffect } from "react";

export default function App() {
  const text = "Welcome to React Learning!";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Auto Typing Effect</h1>

      <h2>{displayText}</h2>
    </div>
  );
}
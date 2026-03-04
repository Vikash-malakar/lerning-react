import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#282c34",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1>Digital Clock ⏰</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
} 
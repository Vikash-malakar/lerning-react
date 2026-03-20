import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Stopwatch</h1>

      <h2>{time} seconds</h2>

      <button
        onClick={() => setRunning(true)}
        style={{ margin: "5px" }}
      >
        Start
      </button>

      <button
        onClick={() => setRunning(false)}
        style={{ margin: "5px" }}
      >
        Stop
      </button>

      <button
        onClick={() => {
          setTime(0);
          setRunning(false);
        }}
        style={{ margin: "5px" }}
      >
        Reset
      </button>
    </div>
  );
}
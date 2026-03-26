import React, { useState, useEffect } from "react";

export default function App() {
  const [seconds, setSeconds] = useState("");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const startTimer = () => {
    setTime(Number(seconds));
    setRunning(true);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(0);
    setSeconds("");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Countdown Timer</h1>

      <input
        type="number"
        placeholder="Enter seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br /><br />

      <button onClick={startTimer} style={{ margin: "5px" }}>
        Start
      </button>

      <button onClick={resetTimer} style={{ margin: "5px" }}>
        Reset
      </button>

      <h2>{time} seconds</h2>
    </div>
  );
}
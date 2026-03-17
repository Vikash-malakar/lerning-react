import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCount(count + Number(step));
  };

  const decrease = () => {
    setCount(count - Number(step));
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Counter with Step</h1>

      <h2>{count}</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <br /><br />

      <button
        onClick={increase}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        Increase
      </button>

      <button
        onClick={decrease}
        style={{ padding: "10px 20px" }}
      >
        Decrease
      </button>
    </div>
  );
}
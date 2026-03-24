import React, { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (num2 === "0") {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br /><br />

      <button onClick={add} style={{ margin: "5px" }}>Add</button>
      <button onClick={subtract} style={{ margin: "5px" }}>Subtract</button>
      <button onClick={multiply} style={{ margin: "5px" }}>Multiply</button>
      <button onClick={divide} style={{ margin: "5px" }}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  );
}
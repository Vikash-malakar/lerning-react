import React, { useState } from "react";

export default function App() {
  // 1️⃣ State create ki
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      {/* Increase Button */}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      {/* Decrease Button */}
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>

      {/* Reset Button */}
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
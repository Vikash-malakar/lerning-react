import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    setPassword(value);

    if (value.length < 4) {
      setStrength("Weak");
    } else if (value.length < 8) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
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
      <h1>Password Strength Checker</h1>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => checkStrength(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <h2>Strength: {strength}</h2>
    </div>
  );
}import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    setPassword(value);

    if (value.length < 4) {
      setStrength("Weak");
    } else if (value.length < 8) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
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
      <h1>Password Strength Checker</h1>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => checkStrength(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <h2>Strength: {strength}</h2>
    </div>
  );
}
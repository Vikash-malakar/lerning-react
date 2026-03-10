import React, { useState } from "react";

export default function App() {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    setAge(currentYear - birthYear);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Age Calculator 🎂</h1>

      <input
        type="number"
        placeholder="Enter your birth year"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <br /><br />

      <button
        onClick={calculateAge}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Calculate Age
      </button>

      {age && <h2>Your Age: {age}</h2>}
    </div>
  );
}
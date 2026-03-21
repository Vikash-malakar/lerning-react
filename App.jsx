import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "") {
      setError("All fields are required");
    } else if (!email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
      alert("Form Submitted Successfully");
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
      <h1>Form Validation</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br /><br />

      <button
        onClick={handleSubmit}
        style={{ padding: "10px 20px" }}
      >
        Submit
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
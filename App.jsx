import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const togglePassword = () => {
    setShow(!show);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Password Toggle App</h1>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <br /><br />

      <button
        onClick={togglePassword}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
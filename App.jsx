import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  const toggleText = () => {
    setShow(!show);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Show / Hide Text App</h1>

      {show && <p>Hello! Welcome to React Learning 🚀</p>}

      <button
        onClick={toggleText}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {show ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}
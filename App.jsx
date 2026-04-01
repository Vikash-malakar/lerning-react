import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Modal Popup App</h1>

      <button onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "5px",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h2>This is Modal</h2>
            <p>Hello, this is a popup</p>

            <button onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
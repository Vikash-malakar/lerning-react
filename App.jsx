import React, { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");

  const content = {
    home: "This is Home Page",
    about: "This is About Page",
    contact: "This is Contact Page",
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Tabs App</h1>

      {/* Buttons */}
      <button onClick={() => setTab("home")} style={{ margin: "5px" }}>
        Home
      </button>

      <button onClick={() => setTab("about")} style={{ margin: "5px" }}>
        About
      </button>

      <button onClick={() => setTab("contact")} style={{ margin: "5px" }}>
        Contact
      </button>

      {/* Content */}
      <div style={{ marginTop: "20px" }}>
        <h2>{content[tab]}</h2>
      </div>
    </div>
  );
}
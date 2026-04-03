import React, { useState } from "react";

export default function App() {
  const data = {
    fruits: ["Apple", "Banana", "Mango"],
    animals: ["Dog", "Cat", "Lion"],
    colors: ["Red", "Green", "Blue"]
  };

  const [activeTab, setActiveTab] = useState("fruits");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial"
      }}
    >
      <h1>Dynamic Tabs App</h1>

      {/* Tabs */}
      <div>
        <button onClick={() => setActiveTab("fruits")} style={{ margin: "5px" }}>
          Fruits
        </button>
        <button onClick={() => setActiveTab("animals")} style={{ margin: "5px" }}>
          Animals
        </button>
        <button onClick={() => setActiveTab("colors")} style={{ margin: "5px" }}>
          Colors
        </button>
      </div>

      {/* Content */}
      <div style={{ marginTop: "20px" }}>
        {data[activeTab].map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "5px auto",
              width: "200px"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
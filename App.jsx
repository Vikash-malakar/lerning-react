import React, { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item === "") return;
    setList([...list, item]);
    setItem("");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Simple List App</h1>

      <input
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <button
        onClick={addItem}
        style={{ padding: "8px 15px", marginLeft: "10px" }}
      >
        Add
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none" }}>
        {list.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}
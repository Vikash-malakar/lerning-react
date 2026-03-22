import React, { useState } from "react";

export default function App() {
  const data = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Search Filter App</h1>

      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "20px"
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index} style={{ margin: "5px 0" }}>
              {item}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}
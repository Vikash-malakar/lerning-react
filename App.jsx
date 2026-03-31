import React, { useState } from "react";

export default function App() {
  const data = [
    "Item 1","Item 2","Item 3","Item 4","Item 5",
    "Item 6","Item 7","Item 8","Item 9","Item 10"
  ];

  const itemsPerPage = 3;

  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Pagination App</h1>

      <ul style={{ listStyle: "none" }}>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{ margin: "5px" }}
        >
          Prev
        </button>

        <span> Page {page} of {totalPages} </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={{ margin: "5px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
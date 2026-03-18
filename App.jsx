import React, { useState } from "react";

export default function App() {
  const [image, setImage] = useState(true);

  const toggleImage = () => {
    setImage(!image);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial"
      }}
    >
      <h1>Image Toggle App</h1>

      <img
        src={
          image
            ? "https://via.placeholder.com/200?text=Image+1"
            : "https://via.placeholder.com/200?text=Image+2"
        }
        alt="demo"
        style={{ marginBottom: "20px" }}
      />

      <br />

      <button
        onClick={toggleImage}
        style={{ padding: "10px 20px" }}
      >
        Change Image
      </button>
    </div>
  );
}
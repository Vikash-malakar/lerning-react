import React, { useState } from "react";

export default function App() {
  const images = [
    "https://via.placeholder.com/300?text=Image+1",
    "https://via.placeholder.com/300?text=Image+2",
    "https://via.placeholder.com/300?text=Image+3"
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="slider"
        style={{ width: "300px", height: "200px" }}
      />

      <br /><br />

      <button onClick={prev} style={{ margin: "5px" }}>
        Prev
      </button>

      <button onClick={next} style={{ margin: "5px" }}>
        Next
      </button>
    </div>
  );
}
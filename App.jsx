import React, { useState } from "react";

export default function App() {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>hello world</h1>
      <h1>Like Button </h1>

      <h2>{likes} Likes</h2>

      <button
        onClick={addLike}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
      
      </button>
    </div>
  );
} 
import React, { useState } from "react";

export default function App() {
  const data = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UI.",
    },
    {
      question: "What is useState?",
      answer: "useState is a hook to manage state in React.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is syntax that looks like HTML in JavaScript.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        fontFamily: "Arial"
      }}
    >
      <h2>FAQ Accordion</h2>

      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => toggle(index)}
            style={{
              background: "#ddd",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {item.question}
          </div>

          {openIndex === index && (
            <div style={{ padding: "10px", border: "1px solid #ddd" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
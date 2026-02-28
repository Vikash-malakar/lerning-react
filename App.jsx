import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      question: "Which language is used for React?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript",
    },
    {
      question: "React is a _____ ?",
      options: ["Library", "Framework", "Database", "Language"],
      answer: "Library",
    },
    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {showResult ? (
          <>
            <h2>Quiz Completed 🎉</h2>
            <h3>
              Your Score: {score} / {questions.length}
            </h3>
            <button onClick={restartQuiz}>Restart</button>
          </>
        ) : (
          <>
            <h3>
              Question {current + 1} / {questions.length}
            </h3>
            <p>{questions[current].question}</p>

            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "8px 15px",
                }}
              >
                {option}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
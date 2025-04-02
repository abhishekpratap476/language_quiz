// QuizApp.js
import React, { useState, useEffect } from 'react';
import './QuizApp.css';

const quizData = [
  {
    question: "What is the Hindi word for (Hello)?",
    answers: {
      a: "नमस्ते (Namaste)",
      b: "अलविदा (Alvida)",
      c: "धन्यवाद (Dhanyavaad)s"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the Hindi word for (Thank you)?",
    answers: {
      a: "कृपया (Kripya)",
      b: "धन्यवाद (Dhanyavaad)",
      c: "शुभ रात्रि (Shubh Raatri)"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the Hindi word for (Goodbye)?",
    answers: {
      a: "नमस्ते (Namaste)",
      b: "अलविदा (Alvida)",
      c: "शुभ दिन (Shubh Din)"
    },
    correctAnswer: "b"
  }
];

const QuizApp = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (

    <div class="quiz-container">
      {quizData.map((question, index) => (
        <div key={index} className="question-container">
          <h3>{question.question}</h3>
          <div className="answers">
            {Object.entries(question.answers).map(([key, value]) => (
              <label key={key} className={showResults ? (key === question.correctAnswer ? 'correct' : userAnswers[index] === key ? 'incorrect' : '') : ''}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={key}
                  checked={userAnswers[index] === key}
                  onChange={() => handleAnswerChange(index, key)}
                  disabled={showResults}
                />
                {key}: {value}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} disabled={showResults}>Submit Quiz</button>
      {showResults && (
        <div className="results">
          Your score: {calculateScore()} out of {quizData.length}
        </div>
      )}
    </div>

  );
};

export default QuizApp;
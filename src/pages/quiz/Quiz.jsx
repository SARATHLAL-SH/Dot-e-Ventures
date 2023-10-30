import React, { useState } from "react";
import QuizQuestions from "../../data/quizQ&A";
import "./quiz.css";
import { useNavigate } from "react-router";

const Quiz = () => {
  const questions = QuizQuestions;
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div>
      {showResults ? (
        <div className="quiz_section">
          <h2>Quiz Results</h2>
          <p>
            Your Score: {calculateScore()} out of {questions.length}
          </p>
          <button onClick={resetQuiz}>Try Again</button>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      ) : (
        <div className="quiz_section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question${currentQuestion}`}
                    value={option}
                    checked={userAnswers[currentQuestion] === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

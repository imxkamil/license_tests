import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import Review from './Review';
import '../styles/quiz.css';

const quizData = [
  { id: 1, question: "Czy w tej sytuacji jesteś informowany o zbliżaniu się do punktu poboru opłat za przejazd autostradą?", answers: ["Tak", "Nie"], correct: "Tak" },
  { id: 2, question: "Czy znak STOP wymaga całkowitego zatrzymania?", answers: ["Tak", "Nie"], correct: "Tak" }
];

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  function handleAnswerClick(answer) {
    setSelectedAnswers({ ...selectedAnswers, [quizData[currentQuestion].id]: answer });

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15);
    } else {
      setIsSubmitted(true);
    }
  }

  function handleRetakeQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setTimeLeft(15);
  }

  return (
    <div className="quiz-container">
      {!isSubmitted ? (
        <>
          <div className="quiz-header">
            <span className="quiz-progress">Pytanie {currentQuestion + 1} z {quizData.length}</span>
          </div>

          <div className="quiz-content">
            <div className="placeholder-image"></div> 
            <div className="question-panel">
              <Timer timeLeft={timeLeft} />
              <Question 
                question={quizData[currentQuestion]} 
                onAnswerClick={handleAnswerClick}
              />
            </div>
          </div>
        </>
      ) : (
        <Review 
          selectedAnswers={selectedAnswers} 
          quizData={quizData} 
          onRetakeQuiz={handleRetakeQuiz}
        />
      )}
    </div>
  );
}

export default QuizPage;

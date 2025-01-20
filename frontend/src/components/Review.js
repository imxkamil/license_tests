import React from 'react';
import '../styles/review.css';

function Review({ selectedAnswers, quizData, onRetakeQuiz }) {
  const correctAnswers = quizData.filter(q => selectedAnswers[q.id] === q.correct).length;
  const isPerfectScore = correctAnswers === quizData.length;

  return (
    <div className="review-container">
      <h2>📊 Podsumowanie testu</h2>
      <p className="score-text">Twój wynik: {correctAnswers} / {quizData.length}</p>
      
      <ul className="review-list">
        {quizData.map(q => {
          const userAnswer = selectedAnswers[q.id] || "Brak";
          const isCorrect = userAnswer === q.correct;
          const isUnanswered = userAnswer === "Brak";

          return (
            <li key={q.id} className={`review-item ${isCorrect ? "correct" : isUnanswered ? "unanswered" : "incorrect"}`}>
              <p>{q.question}</p>
              <p>➡ <strong>Twoja odpowiedź:</strong> {userAnswer}</p>
            </li>
          );
        })}
      </ul>

      <div className="review-footer">
        <p className={`score-message ${isPerfectScore ? "success" : "study-more"}`}>
          {isPerfectScore ? "🎉 Gratulacje! Zdobyłeś maksymalną liczbę punktów!" : "📚 Musisz jeszcze trochę poćwiczyć."}
        </p>
        <button className="retake-button" onClick={onRetakeQuiz}>🔄 Powtórz test</button>
      </div>
    </div>
  );
}

export default Review;

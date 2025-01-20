import React from 'react';
import '../styles/results.css';

function Results({ score, total, answers, onReview }) {
  return (
    <div className="results-container">
      <h2>Wynik egzaminu</h2>
      <p className={score >= 68 ? "positive" : "negative"}>
        {score >= 68 ? "Pozytywny" : "Negatywny"}
      </p>
      <p>Zdobytych punktów: <strong>{score}</strong></p>
      <button onClick={onReview} className="review-button">Zobacz swoje odpowiedzi</button>
    </div>
  );
}

export default Results;

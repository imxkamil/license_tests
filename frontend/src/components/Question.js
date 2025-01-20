import React from 'react';
import '../styles/quiz.css';

function Question({ question, onAnswerClick }) {
  return (
    <div className="question-box">
      <h3 className="question-text">{question.question}</h3>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswerClick(answer)} className="answer-button">
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

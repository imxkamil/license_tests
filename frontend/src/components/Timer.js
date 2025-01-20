import React, { useEffect } from 'react';

function Timer({ timeLeft }) {
  return (
    <div className="timer-container">
      <p className="timer-text">Pozostały czas: {timeLeft}s</p>
      <div className="timer-bar">
        <div className="timer-progress" style={{ width: `${(timeLeft / 15) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default Timer;

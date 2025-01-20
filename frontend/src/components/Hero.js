import React from 'react';
import '../styles/hero.css';
import carImage from '../assets/images/zlomek.jpeg'; // Ensure correct path

function Hero({ onStartQuiz }) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          TESTY NA <span className="highlight">PRAWO JAZDY 2025</span>
        </h1>
        <ul className="hero-list">
          <li>🚀 <span>Wszystkie aktualne pytania z WORD.</span></li>
          <li>📖 <span>Identyczne <strong>jak na egzaminie</strong> państwowym.</span></li>
          <li>✅ <span><strong>Oficjalne pytania</strong> zatwierdzone przez Ministerstwo Infrastruktury.</span></li>
        </ul>
        <button className="cta-button" onClick={onStartQuiz}>
          Rozpocznij test za darmo
        </button>
      </div>
      <div className="hero-image">
        <img src={carImage} alt="Car Hero" />
      </div>
      <div className="hero-decoration"></div>
    </div>
  );
}

export default Hero;

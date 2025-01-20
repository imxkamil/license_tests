import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import QuizPage from './components/QuizPage';
import './styles/global.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        {!quizStarted ? (
          <Hero onStartQuiz={() => setQuizStarted(true)} />
        ) : (
          <QuizPage />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

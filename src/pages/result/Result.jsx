import React, { useContext, useMemo } from 'react';
import QuizContext from '../../context/QuizContext';

import success from '../../assets/images/success.png';
import failure from '../../assets/images/failure.png';
import './Result.css';
const Result = () => {
  const { score, selectedCategory, questionsData, retakeQuiz } =
    useContext(QuizContext);
  console.log('score', score, selectedCategory);
  const percentage = useMemo(
    () => (score.correct / questionsData[selectedCategory].length) * 100,
    [questionsData, score.correct, selectedCategory]
  );
  const { correct, incorrect, skip } = score;

  return (
    <div className="container">
      {percentage > 80 ? (
        <>
          <img src={success} />
          <p className="result-text">Congratulation</p>
          <p className="complete-text">
            You successfully completed the Quiz and holds
          </p>
          <p className="your-score">Your Score</p>
          <p className="score success">{percentage}%</p>
          <p className="great-job">Great job!</p>
        </>
      ) : (
        <>
          <img src={failure} />
          <p className="complete-text">
            You successfully completed the Quiz but you need to
          </p>
          <p className="result-text">
            {percentage > 60 ? 'Well done!' : 'Keep practicing!'}
          </p>
          <div>
            <p className="your-score">Your Score</p>
            <p className="score failure">{percentage}%</p>
          </div>
        </>
      )}
      <p>Out of 10 question</p>
      <div className="summary-container">
        <p>
          <span className="count success">{correct}</span> Correct
        </p>
        <p>
          <span className="count primary">{incorrect}</span> Incorrect
        </p>
        <p>
          <span className="count">{skip}</span> Not Answered
        </p>
      </div>
      <button className="btn-secondary" onClick={retakeQuiz}>
        Retake Quiz
      </button>
    </div>
  );
};

export default Result;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import QuizContext from '../../context/QuizContext';
import './Quiz.css';
import Container from '../../components/container/Container';
const Quiz = () => {
  const {
    selectedCategory,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setScore,
    questionsData,
  } = useContext(QuizContext);
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState();

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (
      answer ===
      questionsData[selectedCategory][currentQuestionIndex].correctAnswer
    ) {
      setScore((prev) => ({
        ...prev,
        correct: prev.correct + 1,
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        incorrect: prev.incorrect + 1,
      }));
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsData[selectedCategory].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result');
    }
    setSelectedAnswer();
  };

  const handleSkip = () => {
    setScore((prev) => ({
      ...prev,
      skip: prev.skip + 1,
    }));
    nextQuestion();
  };
  return (
    <Container>
      <div className="inner-ontainer">
        <h1>
          {currentQuestionIndex + 1}.
          {questionsData[selectedCategory][currentQuestionIndex].question}
        </h1>
        <div className="option-container">
          {questionsData[selectedCategory][currentQuestionIndex].options.map(
            (option, index) => (
              <label
                className={`topic-option ${
                  option === selectedAnswer && 'outlined-option'
                }`}
                key={index}
              >
                <input
                  type="radio"
                  name={option}
                  value={option}
                  checked={option.charAt(0) === selectedAnswer}
                  onChange={() => handleAnswer(option.charAt(0))}
                />
                {option}
              </label>
            )
          )}
        </div>
        <button className="btn" onClick={nextQuestion}>
          Next
        </button>
        <button className="btn-text" onClick={handleSkip}>
          Skip this question
        </button>
      </div>
    </Container>
  );
};

export default Quiz;

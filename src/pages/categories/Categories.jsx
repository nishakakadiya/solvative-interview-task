import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import QuizContext from '../../context/QuizContext';
import './Categories.css';
import Container from '../../components/container/Container';
import QuizRulesModal from '../../components/quiz-modal/QuizModal';
const Categories = () => {
  const {
    setSelectedCategory,
    categories,
    setUserName,
    userName,
    selectedCategory,
  } = useContext(QuizContext);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const startQuiz = () => {
    if (selectedCategory && userName) {
      navigate('/quiz');
    }
  };

  return (
    <Container>
      <h2 className="quiz-header">
        Welcome to{' '}
        <span className="quiz-highlight">
          QUIZ<span className="quiz-bold">Mania</span>
        </span>
      </h2>
      <main className="inner-ontainer">
        <div className="quiz-rules">
          <p>Please read all the rules about this quiz before you start.</p>
          <span onClick={() => setShowModal(true)}>Quiz rules</span>
        </div>
        <div className="input-group">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Please select topic to continue</label>
          <div className="topic-options">
            {categories.map((category) => (
              <label className="topic-option" key={category.id}>
                <input
                  type="radio"
                  name={category.name}
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={() => setSelectedCategory(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>
        <button
          className="btn"
          onClick={startQuiz}
          disabled={!selectedCategory}
        >
          Start Quiz
        </button>
      </main>
      {showModal && <QuizRulesModal onClose={() => setShowModal(false)} />}
    </Container>
  );
};

export default Categories;

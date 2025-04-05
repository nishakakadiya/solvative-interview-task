import React from 'react';
import './QuizModal.css';

const QuizRulesModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="rules-modal">
        <div className="modal-header">
          <h2>Quiz rules</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="modal-section">
          <h4>10-Second Timer</h4>
          <ul>
            <li>Each question comes with a 10-second timer.</li>
            <li>
              If you don’t answer within the time limit, the app will
              automatically move to the next question.
            </li>
          </ul>
        </div>

        <div className="modal-section">
          <h4>Manual Navigation</h4>
          <ul>
            <li>
              You can navigate to the next question manually before the timer
              expires.
            </li>
            <li>
              Use the “Next” button to move ahead if you’re ready before the
              timer runs out.
            </li>
          </ul>
        </div>

        <div className="modal-section">
          <h4>Final Score and Performance Message</h4>
          <ul>
            <li>
              After all questions are answered, your final score will be
              displayed.
            </li>
            <li>
              Based on your performance, you will receive a personalized
              message:
              <ul>
                <li>
                  <strong>Great job!</strong>: If you score{' '}
                  <strong>above 80%</strong>.
                </li>
                <li>
                  <strong>Well done!</strong>: If you score{' '}
                  <strong>between 60% and 80%</strong>.
                </li>
                <li>
                  <strong>Keep practicing!</strong>: If you score{' '}
                  <strong>below 60%</strong>.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizRulesModal;

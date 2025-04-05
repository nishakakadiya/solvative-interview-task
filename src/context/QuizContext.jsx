import { createContext, useState } from 'react';

const QuizContext = createContext();

const categories = [
  { id: 'react_basics', name: 'JavaScript Basics' },
  { id: 'angular_basics', name: 'Angular Basics' },
  { id: 'react_advance', name: 'React Advance' },
  { id: 'flutter', name: 'Flutter' },
];

const questionsData = {
  react_basics: [
    {
      id: 'q1',
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "A. <script name='script.js'>",
        "B. <script href='script.js'>",
        "C. <script src='script.js'>",
        "D. <script file='script.js'>",
      ],
      correctAnswer: 'C',
      timeLimit: 10,
    },
    {
      id: 'q2',
      question: 'Which company developed JavaScript?',
      options: ['A. Microsoft', 'B. Netscape', 'C. Google', 'D. Mozilla'],
      correctAnswer: 'B',
      timeLimit: 10,
    },
  ],
  angular_basics: [
    {
      id: 'q1',
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "A. <script name='script.js'>",
        "B. <script href='script.js'>",
        "C. <script src='script.js'>",
        "D. <script file='script.js'>",
      ],
      correctAnswer: 'C',
      timeLimit: 10,
    },
    {
      id: 'q2',
      question: 'Which company developed JavaScript?',
      options: ['A. Microsoft', 'B. Netscape', 'C. Google', 'D. Mozilla'],
      correctAnswer: 'B',
      timeLimit: 10,
    },
  ],
  react_advance: [
    {
      id: 'q1',
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "A. <script name='script.js'>",
        "B. <script href='script.js'>",
        "C. <script src='script.js'>",
        "D. <script file='script.js'>",
      ],
      correctAnswer: 'C',
      timeLimit: 10,
    },
    {
      id: 'q2',
      question: 'Which company developed JavaScript?',
      options: ['A. Microsoft', 'B. Netscape', 'C. Google', 'D. Mozilla'],
      correctAnswer: 'B',
      timeLimit: 10,
    },
  ],
  flutter: [
    {
      id: 'q1',
      question:
        "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "A. <script name='script.js'>",
        "B. <script href='script.js'>",
        "C. <script src='script.js'>",
        "D. <script file='script.js'>",
      ],
      correctAnswer: 'C',
      timeLimit: 10,
    },
    {
      id: 'q2',
      question: 'Which company developed JavaScript?',
      options: ['A. Microsoft', 'B. Netscape', 'C. Google', 'D. Mozilla'],
      correctAnswer: 'B',
      timeLimit: 10,
    },
  ],
};

export function QuizProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userName, setUserName] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ skip: 0, correct: 0, incorrect: 0 });
  const retakeQuiz = () => {
    setScore({ skip: 0, correct: 0, incorrect: 0 });
    setSelectedCategory(null);
    setUserName(null);
    setCurrentQuestionIndex(null);
  };
  return (
    <QuizContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        score,
        setScore,
        categories,
        questionsData,
        setUserName,
        userName,
        retakeQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
export default QuizContext;

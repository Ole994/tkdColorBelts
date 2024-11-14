import { useState } from 'react';
import './game.css';

const initialQuestions = [
  { id: 1, question: 'Hva er 5 + 5?', answer: '10' },
  { id: 2, question: 'Hovedstaden i Norge?', answer: 'Oslo' },
  { id: 3, question: 'Hva er hovedstaden i Danmark?', answer: 'København' },
];

const initialAnswers = [
  { id: 1, text: 'København' },
  { id: 2, text: 'Oslo' },
  { id: 3, text: '10' },
];

const DragDropGame = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [answers, setAnswers] = useState(initialAnswers);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleDrop = (answerId, questionId) => {
    const answer = answers.find((a) => a.id === answerId);
    const question = questions.find((q) => q.id === questionId);

    if (answer && question && answer.text === question.answer) {
      setCorrectAnswers([...correctAnswers, questionId]);
    }
  };

  const handleDragStart = (e, answerId) => {
    e.dataTransfer.setData('answerId', answerId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropOnQuestion = (e, questionId) => {
    e.preventDefault();
    const answerId = parseInt(e.dataTransfer.getData('answerId'), 10);
    handleDrop(answerId, questionId);
  };

  const resetGame = () => {
    setQuestions(initialQuestions);
    setAnswers(initialAnswers);
    setCorrectAnswers([]);
  };

  return (
    <div className="game-container">
      <h1>Drag and Drop Spill</h1>
      <button className="restart-btn" onClick={resetGame}>Restart Game</button>
      <div className="questions">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`question ${correctAnswers.includes(q.id) ? 'correct' : ''}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDropOnQuestion(e, q.id)}
          >
            <p>{q.question}</p>
            {correctAnswers.includes(q.id) && <span className="answer-display">{q.answer}</span>}
          </div>
        ))}
      </div>

      <div className="answers">
        {answers.map((a) => (
          <div
            key={a.id}
            className="answer"
            draggable
            onDragStart={(e) => handleDragStart(e, a.id)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropGame;

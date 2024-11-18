
import { useState, useRef, useEffect } from 'react';
import './game.css'; // Bruker eksisterende CSS

const initialQuestions = [
  { id: 1, question: 'Vertikal stilling', answer: 'so jik sogi' },
  { id: 2, question: 'Sittestilling middels skyvende blokk med håndflate', answer: 'Annun so sondbadak kaunde miro makgi' },
  { id: 3, question: 'Tett stilling side-front blokk med innsiden av underarmen', answer: 'Moa so an palmok yobap makgi' },
  { id: 4, question: 'L-stilling oppoverpunch', answer: 'niunja so ollyo jirugi' },
  { id: 5, question: 'L-stilling middels rett punch', answer: 'niunja so kaunde baro jirugi' },
  { id: 6, question: 'Vertikal stilling nedoverslag med knivhånd', answer: 'soo jik so sonkal naeryo taerigi' },
  { id: 7, question: 'L-stilling sidestøt med albuen', answer: 'niunja so yop palkup tulgi' },
  { id: 8, question: 'Flygende frontspark', answer: 'twimyo ap chagi' },
];

const initialAnswers = [
  { id: 1, text: 'so jik sogi Vertikal stilling' },
  { id: 2, text: 'Annun so sondbadak kaunde miro makgi' },
  { id: 3, text: 'Moa so an palmok yobap makgi' },
  { id: 4, text: 'niunja so ollyo jirugi' },
  { id: 5, text: 'niunja so kaunde baro jirugi' },
  { id: 6, text: 'soo jik so sonkal naeryo taerigi' },
  { id: 7, text: 'niunja so yop palkup tulgi' },
  { id: 8, text: 'twimyo ap chagi' },
];

const DragDropGame = () => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const draggedAnswer = useRef(null);
  const scrollInterval = useRef(null);

  const handleDragStart = (e, answerId) => {
    draggedAnswer.current = answerId;
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e, questionId) => {
    e.preventDefault();
    const answerId = draggedAnswer.current;
    const draggedItem = answers.find((a) => a.id === answerId);
    const targetQuestion = initialQuestions.find((q) => q.id === questionId);

    if (draggedItem && targetQuestion && draggedItem.text === targetQuestion.answer) {
      setCorrectAnswers((prev) => ({
        ...prev,
        [questionId]: draggedItem.text,
      }));
      setAnswers((prev) => prev.filter((a) => a.id !== answerId));
    }
    draggedAnswer.current = null;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    handleAutoScroll(e.clientY);
  };

  const handleAutoScroll = (yPos) => {
    const screenHeight = window.innerHeight;
    const scrollSpeed = calculateScrollSpeed(yPos, screenHeight);

    stopAutoScroll(); // Stop eventuelle tidligere scrolls
    if (scrollSpeed !== 0) {
      scrollInterval.current = setInterval(() => {
        window.scrollBy(0, scrollSpeed); // Scroll med beregnet hastighet
      }, 20);
    }
  };

  const calculateScrollSpeed = (yPos, screenHeight) => {
    const scrollBoundary = 0.15 * screenHeight; // Start scrolleffekten 15% fra topp/bunn
    if (yPos < scrollBoundary) {
      // Scroll opp
      return -5 - Math.floor((scrollBoundary - yPos) / 10); // Øk hastigheten jo nærmere toppen
    } else if (yPos > screenHeight - scrollBoundary) {
      // Scroll ned
      return 5 + Math.floor((yPos - (screenHeight - scrollBoundary)) / 10); // Øk hastigheten jo nærmere bunnen
    }
    return 0; // Ikke scroll i midten
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    document.addEventListener('dragend', stopAutoScroll);
    return () => {
      document.removeEventListener('dragend', stopAutoScroll);
      stopAutoScroll();
    };
  }, []);

  const resetGame = () => {
    setAnswers(initialAnswers);
    setCorrectAnswers({});
  };

  return (
    <div className="game-container">
      <h1>Drag and Drop Spill</h1>
      <div className="controls">
        <button className="restart-btn" onClick={resetGame}>Restart Game</button>
      </div>

      <div className="questions">
        {initialQuestions.map((q) => (
          <div key={q.id} className="question">
            <p>{q.question}</p>
            <div
              className="drop-area"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, q.id)}
            >
              {correctAnswers[q.id] && <div className="answer-display">{correctAnswers[q.id]}</div>}
            </div>
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




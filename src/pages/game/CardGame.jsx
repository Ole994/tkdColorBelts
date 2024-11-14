import { useState, useEffect } from 'react';
import Card from './Card';
import './game.css';

const initialCards = [
  { id: 1, text: 'Ninja so', matchId: 1 },
  { id: 2, text: 'Knivhåndsblokk', matchId: 1 },
  { id: 3, text: 'Dwitbal chagi', matchId: 2 },
  { id: 4, text: 'Bakstilling spark', matchId: 2 },
  { id: 5, text: 'Charyot sogi', matchId: 3 },
  { id: 6, text: 'Parallel stance', matchId: 3 },
  { id: 7, text: 'Ap chagi', matchId: 4 },
  { id: 8, text: 'Front kick', matchId: 4 },
];

const CardGame = () => {
  const [cards, setCards] = useState(() => shuffle([...initialCards, ...initialCards]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 sekunder

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      alert('Tiden er ute! Prøv igjen.');
      resetGame();
    }
  }, [timeLeft]);

  const handleCardClick = (card) => {
    if (selectedCards.length < 2 && !selectedCards.includes(card)) {
      setSelectedCards((prev) => [...prev, card]);

      if (selectedCards.length === 1) {
        setMoves((prev) => prev + 1);

        if (selectedCards[0].matchId === card.matchId) {
          setMatchedPairs((prev) => [...prev, card.matchId]);
          setSelectedCards([]);
        } else {
          setTimeout(() => setSelectedCards([]), 1000);
        }
      }
    }
  };

  const resetGame = () => {
    setCards(shuffle([...initialCards, ...initialCards]));
    setMatchedPairs([]);
    setSelectedCards([]);
    setMoves(0);
    setTimeLeft(60);
  };

  return (
    <div className="game-container">
      <div className="header">
        <h1>Memory Match Game</h1>
        <div className="stats">
          <span>Moves: {moves}</span>
          <span>Time Left: {timeLeft}s</span>
        </div>
        <button onClick={resetGame}>Restart Game</button>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            isFlipped={selectedCards.includes(card) || matchedPairs.includes(card.matchId)}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default CardGame;




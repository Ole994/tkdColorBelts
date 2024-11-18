import { useState,useEffect } from 'react';
import './game.css'; // Importer CSS for designet

// Legg til CSS for styling av spillet
const questions = [
  { id: 1, type: 'question', text: 'Vertikal stilling' },
  { id: 2, type: 'question', text: 'Sittestilling middels skyvende blokk med håndflate' },
  { id: 3, type: 'question', text: 'Tett stilling side-front blokk med innsiden av underarmen' },
  { id: 4, type: 'question', text: 'L-stilling oppoverpunch' },
  { id: 5, type: 'question', text: 'L-stilling middels rett punch' },
  { id: 6, type: 'question', text: 'Vertikal stilling nedoverslag med knivhånd' },
  { id: 7, type: 'question', text: 'L-stilling sidestøt med albuen' },
  { id: 8, type: 'question', text: 'Flygende frontspark' },
];

const answers = [
  { id: 1, type: 'answer', text: 'so jik sogi' },
  { id: 2, type: 'answer', text: 'Annun so sonbadak kaunde miro makgi' },
  { id: 3, type: 'answer', text: 'Moa so an palmok yobap makgi' },
  { id: 4, type: 'answer', text: 'niunja so ollyo jirugi' },
  { id: 5, type: 'answer', text: 'niunja so kaunde baro jirugi' },
  { id: 6, type: 'answer', text: 'soo jik so sonkal naeryo taerigi' },
  { id: 7, type: 'answer', text: 'niunja so yop palkup tulgi' },
  { id: 8, type: 'answer', text: 'twimyo ap chagi' },
];

const CardGame = () => {
  const [cards, setCards] = useState([]); // Holder alle kort
  const [visibleCards, setVisibleCards] = useState([]); // Holder 4 kort om gangen
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const shuffledCards = [...questions, ...answers].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    pickVisibleCards(shuffledCards, []);
  }, []);

  const pickVisibleCards = (allCards, matchedIds) => {
    const remainingCards = allCards.filter((card) => !matchedIds.includes(card.id));
    let selected = [];

    while (selected.length < 4) {
      const questionCard = remainingCards.find((card) => card.type === 'question' && !selected.includes(card));
      const answerCard = remainingCards.find((card) => card.type === 'answer' && card.id === questionCard.id);

      if (questionCard && answerCard) {
        selected = [...selected, questionCard, answerCard];
        remainingCards.splice(remainingCards.indexOf(questionCard), 1);
        remainingCards.splice(remainingCards.indexOf(answerCard), 1);
      }

      // Hvis vi ikke klarer å fylle opp 4 kort
      if (selected.length >= 4 || remainingCards.length === 0) break;
    }

    setVisibleCards(selected.slice(0, 4));
  };

  const handleCardClick = (card) => {
    if (selectedCards.length < 2 && !selectedCards.includes(card)) {
      setSelectedCards((prev) => [...prev, card]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;

      if (firstCard.id === secondCard.id && firstCard.type !== secondCard.type) {
        setMatchedCards((prev) => [...prev, firstCard.id]);
        setTimeout(() => {
          pickVisibleCards(cards, [...matchedCards, firstCard.id]); // Plukk nye 4 kort basert på det som er igjen
        }, 500);
      }

      setTimeout(() => setSelectedCards([]), 6000);
    }
  }, [selectedCards]);

  return (
    <div className="card-game-container">
      <h1>Match the Cards</h1>
      <div className="card-grid">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`card ${selectedCards.includes(card) || matchedCards.includes(card.id) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">
                <p>{card.type === 'question' ? card.text : '?'}</p>
              </div>
              <div className="card-back">
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGame;
import { useState, useEffect } from 'react';
import './cardGame.css';
import PropTypes from 'prop-types';

const cardPairs = [
  { label: 'Bergen', match: 'Norway' },
  { label: 'Paris', match: 'France' },
  { label: 'London', match: 'England' },
];

const CardGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cardPairs, ...cardPairs.map(card => ({
      label: card.match,
      match: card.match,
    }))]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), status: null }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.match === choiceTwo.match) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.match === choiceOne.match
              ? { ...card, status: 'correct' }
              : card
          )
        );
        resetTurn();
      } else {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === choiceOne.id || card.id === choiceTwo.id
              ? { ...card, status: 'wrong' }
              : card
          )
        );
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, status: null }))
    );
    setDisabled(false);
  };
  useEffect(() => {
    console.log(cards); // Dette vil logge kortene i konsollen
  }, [cards]);
  

  return (
    <div className="card-game">
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

const Card = ({ card, handleChoice, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div
      className={`card ${card.status}`}
      onClick={handleClick}
    >
      <div className="content">{card.label}</div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    label: PropTypes.string.isRequired,
    match: PropTypes.string.isRequired,
    status: PropTypes.oneOf([null, 'correct', 'wrong']),
  }).isRequired,
  handleChoice: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CardGame;


import PropTypes from 'prop-types';

import './game.css';

const Card = ({ card, isFlipped, onClick }) => {
    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
        <div className="card-inner">
          <div className="card-front">?</div>
          <div className="card-back">{card.text}</div>
        </div>
      </div>
    );
  };
  
  Card.propTypes = {
    card: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      matchId: PropTypes.number.isRequired,
    }).isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  export default Card;



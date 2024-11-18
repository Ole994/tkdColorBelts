import  { useState } from 'react';
import './game.css';
import firstImage from "../../images/Annun-so-sondbadak-kaunde-miro-makgi.jpg";
import secoundImage from "../../images/annun-so-kaunde-jirugi.jpg";
import thirdImage from "../../images/annun-so-kaunde-jirugi.jpg";
import fourthImage from "../../images/niunja-so-sang-palmok-makgi.jpg";
import fifthImage from "../../images/niunja-so-olloyo-jirugi.jpg";
// import sixthImage from "../../images/Annun-so-sondbadak-kaunde-miro-makgi.jpg";

const initialQuestions = [
  
  { id: 1, question: '1. Flytt venstre fot mot B til en sittestilling vendt mot D. Utfør en middels skyvende blokk med venstre håndflate mot D ', 
    answer: 'annun so sondbadak kaunde miro makgi', 
    image: firstImage },

    { id: 2, question: '2.	Utfør på stedet en middels punch med høyre knyttneve  ', 
      answer: 'annun so kaunde jirugi', 
      image: secoundImage },

      { id: 3, question: '3.	Utfør på stedet en middels punch med venstre knyttneve  ', 
        answer: 'annun so kaunde jirugi', 
        image: thirdImage },

        { id: 4, question: '4.	4.	Vri venstre fot og flytt høyre fot mot A til en venstre L-stilling utfør på stedet en tvilling underarmsblokk  ', 
          answer: 'niunja so sang palmok makgi', 
          image: fourthImage },
          { id: 5, question: '	5.	5.	Utfør på stedet et oppover punch med venstre knyttneve. Høyre knyttneve trekkes fram foran venstre skulder – niunja so olloyo jirugi', 
            answer: 'niunja so olloyo jirugi', 
            image: fifthImage },
  // { id: 1, question: 'Vertikal stilling', answer: 'so jik sogi', image: 'path/to/image1.jpg' },
  // { id: 2, question: 'Sittestilling middels skyvende blokk med håndflate', answer: 'Annun so sondbadak kaunde miro makgi', image: 'path/to/image2.jpg' },
  // { id: 3, question: 'Tett stilling side-front blokk med innsiden av underarmen', answer: 'Moa so an palmok yobap makgi', image: 'path/to/image3.jpg' },
  // { id: 4, question: 'L-stilling oppoverpunch', answer: 'niunja so ollyo jirugi', image: 'path/to/image4.jpg' },
  // { id: 5, question: 'L-stilling middels rett punch', answer: 'niunja so kaunde baro jirugi', image: 'path/to/image5.jpg' },
  // { id: 6, question: 'Vertikal stilling nedoverslag med knivhånd', answer: 'soo jik so sonkal naeryo taerigi', image: 'path/to/image6.jpg' },
  // { id: 7, question: 'L-stilling sidestøt med albuen', answer: 'niunja so yop palkup tulgi', image: 'path/to/image7.jpg' },
  // { id: 8, question: 'Flygende frontspark', answer: 'twimyo ap chagi', image: 'path/to/image8.jpg' },

];

const FlashCards = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flip-card-container">
      {initialQuestions.map((item) => (
        <div
          key={item.id}
          className={`flip-card ${flipped[item.id] ? 'flipped' : ''}`}
          onClick={() => handleFlip(item.id)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>{item.question}</p>
            </div>
            <div className="flip-card-back">
              <p>{item.answer}</p>
              <img src={item.image} alt={item.answer} className="card-image" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
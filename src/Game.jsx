import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "./Card";

const icons = [
  "🍎", "🍉", "🍋", "🍌",
  "🍓", "🍒", "🍍", "🍑",
  "🍇", "🍊", "🥭", "🥝",
  "🍏", "🥥", "🍅", "🥑",
  "🍈","🧀"
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffledIcons = icons.concat(icons).sort(() => Math.random() - 0.5);
    const initialCards = shuffledIcons.map((icon, index) => ({
      id: index,
      icon
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = (selectedCard) => {
    setSelectedCards([...selectedCards, selectedCard]);

    if (selectedCards.length === 1) {
      if (selectedCards[0].icon === selectedCard.icon) {
        setMatchedPairs([...matchedPairs, selectedCards[0].id, selectedCard.id]);
        setScore(score + 1);
        toast.success('Congratulations! You found a match.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Not matched! Try again.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
    }
  };

  return (

    <div>

    <ToastContainer />
    <div className="w-full text-center m-4 ">Score: {score}</div>

    <div className="grid grid-cols-9 flex-wrap  gap-9 mx-auto justify-center text-center">
      
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={handleCardClick}
          disabled={selectedCards.length === 2}
          matched={matchedPairs.includes(card.id)}
        />
      ))}
    </div>
    
    </div>
  );
};

export default Game;

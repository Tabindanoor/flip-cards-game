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
    resetGame();
  }, []);

  const resetGame = () => {
    const shuffledIcons = icons.concat(icons).sort(() => Math.random() - 0.5);
    const initialCards = shuffledIcons.map((icon, index) => ({
      id: index,
      icon
    }));
    setCards(initialCards);
    setSelectedCards([]);
    setMatchedPairs([]);
    setScore(0);
  };


  const handleCardClick = (selectedCard) => {
    if (selectedCard.matched || selectedCards.includes(selectedCard)) {
        return; // Ignore if the card is already matched or is already selected
    }

    setSelectedCards([...selectedCards, selectedCard]);

    if (selectedCards.length === 1) {
        if (selectedCards[0].icon === selectedCard.icon) {
            setMatchedPairs([...matchedPairs, selectedCards[0].id, selectedCard.id]);
            setScore(score + 1);
            toast.success('Congratulations! You found a match.', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            toast.error('Not matched! Try again.', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        setTimeout(() => {
            setSelectedCards([]);
        }, 2000);
    }
};

  return (
    <div>   
      

      <div className="flex float-end">
        <ToastContainer />
      </div>
      <div className="w-full text-center font-semibold font-serif text-2xl  m-4 text-red-800">Score: {score}</div>
      <div className="grid xl:grid-cols-9 grid-cols-3 md:grid-cols-6 flex-wrap gap-9 mx-auto justify-center text-center">
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
      <button onClick={resetGame} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">Reset</button>

    </div>
  );
};

export default Game;

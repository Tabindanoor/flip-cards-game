// // src/components/Game.js
// import React, { useState, useEffect } from 'react';
// import Board from './Board';

// const Game = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     const newCards = [];
//     const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//     for (let i = 0; i < 8; i++) {
//       newCards.push({ value: values[i], flipped: false, matched: false });
//       newCards.push({ value: values[i], flipped: false, matched: false });
//     }
//     newCards.sort(() => Math.random() - 0.5);
//     setCards(newCards);
//   }, []);

//   const handleClick = (selectedCard) => {
//     setCards((prevCards) =>
//       prevCards.map((card) =>
//         card === selectedCard ? { ...card, flipped: !card.flipped } : card
//       )
//     );
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <Board cards={cards} onClick={handleClick} />
//     </div>
//   );
// };

// export default Game;


// Game.js
import { useState, useEffect } from "react";
import Card from "./Card";

const icons = [
  "🍎", "🍉", "🍋", "🍌",
  "🍓", "🍒", "🍍", "🍑",
  "🍇", "🍊", "🥭", "🥝",
  "🍏", "🥥", "🍅", "🥑"
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

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
      }
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-wrap w-72">
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
  );
};

export default Game;

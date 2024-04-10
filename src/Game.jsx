// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Board from './Board';

const Game = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const newCards = [];
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < 8; i++) {
      newCards.push({ value: values[i], flipped: false, matched: false });
      newCards.push({ value: values[i], flipped: false, matched: false });
    }
    newCards.sort(() => Math.random() - 0.5);
    setCards(newCards);
  }, []);

  const handleClick = (selectedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card === selectedCard ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Board cards={cards} onClick={handleClick} />
    </div>
  );
};

export default Game;

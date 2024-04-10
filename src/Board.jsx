// src/components/Board.js
import React from 'react';
import Card from './Card';

const Board = ({ cards, onClick }) => {
  return (
    <div className="grid grid-cols-4 gap-1 m-4">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={onClick} />
      ))}
    </div>
  );
};

export default Board;

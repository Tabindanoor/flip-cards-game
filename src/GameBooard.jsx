import { useState } from "react";
import Card from "./Card";

const symbols = ["😀", "😎", "🚀", "🌈", "🍕", "🎉", "👻", "🐱"];

const GameBoard = () => {
  const [cards, setCards] = useState(
    symbols
      .concat(symbols)
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({ id: index, symbol, isMatched: false }))
  );

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (id, symbol) => {
    setSelectedCards([...selectedCards, { id, symbol }]);

    if (selectedCards.length === 1 && selectedCards[0].symbol === symbol) {
      setCards(
        cards.map((card) =>
          card.symbol === symbol ? { ...card, isMatched: true } : card
        )
      );
      setSelectedCards([]);
    }

    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          symbol={card.isMatched || selectedCards.some((c) => c.id === card.id) ? card.symbol : "❓"}
          handleClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;

// Card.js
import { useState, useEffect } from "react";

const Card = ({ card, onClick, disabled, matched }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!matched && flipped) {
      const timeout = setTimeout(() => {
        setFlipped(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [flipped, matched]);

  const handleClick = () => {
    if (!flipped && !matched && !disabled) {
      setFlipped(true);
      onClick(card);
    }
  };



  return (
    <div
      className={`card ${flipped || matched ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="bg-violet-700 border-green-500 border-4 rounded-lg p-4 w-20 h-20 flex justify-center items-center text-4xl font-bold">
        {flipped || matched ? card.icon : "😎"}
      </div>
    </div>
  );
};

export default Card;

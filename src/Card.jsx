import React, { useState } from "react";

const Card = ({ symbol, id, handleClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(true);
    handleClick(id, symbol);
  };

  return (
    <div
      className={`card ${isFlipped ? "bg-blue-500" : "bg-gray-300"} m-2 p-4`}
      onClick={!isFlipped ? handleCardClick : undefined}
    >
      {isFlipped ? symbol : "Click to flip"}
    </div>
  );
};

export default Card;

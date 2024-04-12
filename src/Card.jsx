// import  { useState } from "react";

// const Card = ({ symbol, id, handleClick }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleCardClick = () => {
//     setIsFlipped(true);
//     handleClick(id, symbol);
//   };

//   return (
//     <div
//       className={`card ${isFlipped ? "bg-blue-500" : "bg-gray-300"} m-2 p-4`}
//       onClick={!isFlipped ? handleCardClick : undefined}
//     >
//       {isFlipped ? symbol : "Click to flip"}
//     </div>
//   );
// };

// export default Card;



// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Card = ({ card, onCardClick, disabled }) => {
//   const handleClick = () => {
//     if (!disabled) {
//       onCardClick(card.id);
//     }
//   };

//   return (
//     <div
//       className={`card ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-400 to-pink-500'} shadow-md rounded-md p-4 m-2`}
//       onClick={handleClick}
//     >
//       {card.isFlipped ? (
//         <img src={card.image} alt={card.name} className="w-full h-full" />
//       ) : (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default Card;




// src/components/Card.js
import React from 'react';

const Card = ({ card, onClick, disabled }) => {
  return (
    <button
      className={`w-20 h-20 bg-blue-600 focus:outline-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-blue-600'}`}
      onClick={() => onClick(card)}
      disabled={disabled}
    >
      {card.flipped ? card.value : '?'}
    </button>
  );
};

export default Card;

import { useState, useEffect } from 'react';
import Card from './Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const initializeCards = () => {
    const cardsArray = [];
    for (let i = 0; i < 8; i++) {
      const card = {
        id: i,
        name: `Card ${i}`,
        image: `https://picsum.photos/200/300?random=${i}`,
        isFlipped: false,
        isMatched: false,
      };
      cardsArray.push(card);
      cardsArray.push({ ...card, id: i + 8 });
    }
    setCards(cardsArray.sort(() => Math.random() - 0.5));
  };

  const checkMatch = () => {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.name === secondCard.name) {
      setCards(
        cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, isMatched: true };
          }
          return card;
        })
      );
      setFlippedCards([]);
      toast.success('Matched!');
    } else {
      setTimeout(() => {
        setCards(
          cards.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, isFlipped: false };
            }
            return card;
          })
        );
        setFlippedCards([]);
        toast.warn('Try again!');
      }, 1000);
    }
  };

  const handleCardClick = (id) => {
    if (flippedCards.length === 0) {
      setFlippedCards([cards.find((card) => card.id === id)]);
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            return { ...card, isFlipped: true };
          }
          return card;
        })
      );
    } else if (flippedCards.length === 1) {
      setFlippedCards([...flippedCards, cards.find((card) => card.id === id)]);
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            return { ...card, isFlipped: true };
          }
          return card;
        })
      );
      setDisabled(true);
      setTimeout(() => {
        checkMatch();
        setDisabled(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (cards.every((card) => card.isMatched)) {
      toast.success('Congratulations! All cards are matched.');
      setCards(
        cards.map((card) => {
          return { ...card, isFlipped: false, isMatched: false };
        })
      );
    }
  }, [cards]);

  useEffect(() => {
    initializeCards();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card key={card.id} card={card} onCardClick={handleCardClick} disabled={disabled || card.isFlipped || card.isMatched} />
      ))}
      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
};

export default MemoryGame;

import React from "react";
import styled from "styled-components";
import { Card as CardType } from "../types/Card";

interface CardProps {
  card: CardType;
  onClick: (id: number) => void;
}

const CardContainer = styled.div<{ isFlipped: boolean }>`
  width: min(22vw, 300px);
  height: min(22vw, 300px);
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  margin: min(1.5vw, 15px);

  @media (max-width: 1200px) {
    width: min(20vw, 250px);
    height: min(20vw, 250px);
    margin: min(1.2vw, 12px);
  }

  @media (max-width: 768px) {
    width: min(18vw, 200px);
    height: min(18vw, 200px);
    margin: min(1vw, 10px);
  }

  @media (max-width: 480px) {
    width: min(20vw, 150px);
    height: min(20vw, 150px);
    margin: min(0.8vw, 8px);
  }

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
    z-index: 1;
  }
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CardFront = styled(CardFace)`
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  color: #fff;
  font-size: min(8vw, 120px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border: 2px solid #555;

  @media (max-width: 1200px) {
    font-size: min(7vw, 100px);
  }

  @media (max-width: 768px) {
    font-size: min(6vw, 80px);
  }

  @media (max-width: 480px) {
    font-size: min(7vw, 60px);
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(255, 215, 0, 0.3);
    border-color: #ffd700;
  }
`;

const CardBack = styled(CardFace)<{ imagePath: string }>`
  background: linear-gradient(135deg, #b22222 0%, #8b0000 100%);
  transform: rotateY(180deg);
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(178, 34, 34, 0.15) 50%,
      transparent 60%
    );
    z-index: 2;
  }
`;

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <CardContainer isFlipped={card.isFlipped} onClick={() => onClick(card.id)}>
      <CardInner isFlipped={card.isFlipped}>
        <CardFront>{card.emoji}</CardFront>
        <CardBack imagePath={card.imagePath} />
      </CardInner>
    </CardContainer>
  );
};

export default Card;

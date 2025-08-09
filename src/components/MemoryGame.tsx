import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Card as CardType, EMOJIS } from "../types/Card";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  max-width: none;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 15px;
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    gap: 15px;
  }
`;

const GameArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: fit-content;
  overflow: visible;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  
  @media (max-width: 480px) {
    border-radius: 15px;
    padding: 5px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: min(2vw, 25px);
  padding: min(3vw, 40px);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  border: 2px solid #444;
  width: auto;
  min-width: fit-content;
  max-width: min(98vw, 1400px);
  aspect-ratio: 1;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    gap: min(1.5vw, 20px);
    padding: min(2.5vw, 30px);
    max-width: min(95vw, 1200px);
  }

  @media (max-width: 768px) {
    gap: min(1.2vw, 15px);
    padding: min(2vw, 25px);
    max-width: min(98vw, 1000px);
  }

  @media (max-width: 480px) {
    gap: min(1vw, 12px);
    padding: min(1.5vw, 20px);
    border-radius: 15px;
    max-width: 98vw;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    bottom: 15px;
    right: 15px;
    gap: 10px;
  }
`;

const GameButton = styled.button`
  background: linear-gradient(135deg, #b22222 0%, #8b0000 100%);
  color: #ffd700;
  border: none;
  padding: min(2vw, 30px) min(4vw, 60px);
  font-size: min(1.5vw, 24px);
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  min-width: min(18vw, 250px);
  white-space: nowrap;

  @media (max-width: 1200px) {
    padding: min(1.8vw, 25px) min(3.5vw, 50px);
    font-size: min(1.3vw, 20px);
    min-width: min(16vw, 220px);
  }

  @media (max-width: 768px) {
    padding: min(1.5vw, 20px) min(3vw, 40px);
    font-size: min(1.8vw, 18px);
    min-width: min(25vw, 180px);
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    padding: min(3vw, 15px) min(6vw, 30px);
    font-size: min(3.5vw, 16px);
    min-width: min(35vw, 150px);
    letter-spacing: 0.5px;
  }

  &:hover {
    background: linear-gradient(135deg, #dc143c 0%, #b22222 100%);
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MemoryGame: React.FC = () => {
  // 초기 카드 생성
  const createInitialCards = useCallback((): CardType[] => {
    return EMOJIS.map((emoji, index) => ({
      id: index,
      emoji,
      imagePath: `/assets/card/${index + 1}.jpg`,
      isFlipped: false,
    }));
  }, []);

  const [cards, setCards] = useState<CardType[]>(createInitialCards);

  // 개별 카드 뒤집기
  const handleCardClick = useCallback((cardId: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  }, []);

  // 전체 카드 뒤집기
  const handleFlipAll = useCallback(() => {
    setCards((prevCards) => {
      // 모든 카드의 상태가 같아야 하므로, 첫 번째 카드의 상태를 기준으로 반전
      const newFlippedState = !prevCards[0].isFlipped;
      return prevCards.map((card) => ({
        ...card,
        isFlipped: newFlippedState,
      }));
    });
  }, []);

  // 카드 섞기
  const handleShuffle = useCallback(() => {
    setCards((prevCards) => {
      // 이모지 배열과 이미지 경로 배열을 각각 섞기
      const shuffledEmojis = [...EMOJIS];
      const shuffledImagePaths = Array.from(
        { length: 16 },
        (_, i) => `/assets/card/${i + 1}.jpg`
      );

      // Fisher-Yates 셔플 알고리즘으로 이모지 섞기
      for (let i = shuffledEmojis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledEmojis[i], shuffledEmojis[j]] = [
          shuffledEmojis[j],
          shuffledEmojis[i],
        ];
      }

      // Fisher-Yates 셔플 알고리즘으로 이미지 경로 섞기
      for (let i = shuffledImagePaths.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImagePaths[i], shuffledImagePaths[j]] = [
          shuffledImagePaths[j],
          shuffledImagePaths[i],
        ];
      }

      // 새로운 카드 배열 생성 (이모지와 이미지가 랜덤하게 매칭됨)
      return shuffledEmojis.map((emoji, index) => ({
        id: index,
        emoji,
        imagePath: shuffledImagePaths[index],
        isFlipped: false,
      }));
    });
  }, []);

  return (
    <GameContainer>
      <GameArea>
        <CardGrid>
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </CardGrid>
      </GameArea>

      <ButtonContainer>
        <GameButton onClick={handleFlipAll}>🔄 전체 뒤집기</GameButton>
        <GameButton onClick={handleShuffle}>🎲 카드 섞기</GameButton>
      </ButtonContainer>
    </GameContainer>
  );
};

export default MemoryGame;

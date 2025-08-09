import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Card as CardType, EMOJIS } from '../types/Card';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const GameArea = styled.div`
  position: relative;
  display: inline-block;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 40px;
  padding: 60px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  border: 2px solid #444;
  
  @media (max-width: 768px) {
    gap: 30px;
    padding: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
    padding: 30px;
    border-radius: 15px;
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
  background: linear-gradient(135deg, #B22222 0%, #8B0000 100%);
  color: #FFD700;
  border: none;
  padding: 30px 60px;
  font-size: 2.2rem;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  min-width: 280px;

  @media (max-width: 768px) {
    padding: 25px 50px;
    font-size: 1.8rem;
    min-width: 240px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 40px;
    font-size: 1.4rem;
    min-width: 200px;
    letter-spacing: 1px;
  }

  &:hover {
    background: linear-gradient(135deg, #DC143C 0%, #B22222 100%);
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
      isFlipped: false
    }));
  }, []);

  const [cards, setCards] = useState<CardType[]>(createInitialCards);

  // 개별 카드 뒤집기
  const handleCardClick = useCallback((cardId: number) => {
    setCards(prevCards => 
      prevCards.map(card => 
        card.id === cardId 
          ? { ...card, isFlipped: !card.isFlipped }
          : card
      )
    );
  }, []);

  // 전체 카드 뒤집기
  const handleFlipAll = useCallback(() => {
    setCards(prevCards => {
      // 모든 카드의 상태가 같아야 하므로, 첫 번째 카드의 상태를 기준으로 반전
      const newFlippedState = !prevCards[0].isFlipped;
      return prevCards.map(card => ({
        ...card,
        isFlipped: newFlippedState
      }));
    });
  }, []);

  // 카드 섞기
  const handleShuffle = useCallback(() => {
    setCards(prevCards => {
      // 이모지 배열과 이미지 경로 배열을 각각 섞기
      const shuffledEmojis = [...EMOJIS];
      const shuffledImagePaths = Array.from({length: 16}, (_, i) => `/assets/card/${i + 1}.jpg`);
      
      // Fisher-Yates 셔플 알고리즘으로 이모지 섞기
      for (let i = shuffledEmojis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledEmojis[i], shuffledEmojis[j]] = [shuffledEmojis[j], shuffledEmojis[i]];
      }
      
      // Fisher-Yates 셔플 알고리즘으로 이미지 경로 섞기
      for (let i = shuffledImagePaths.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImagePaths[i], shuffledImagePaths[j]] = [shuffledImagePaths[j], shuffledImagePaths[i]];
      }
      
      // 새로운 카드 배열 생성 (이모지와 이미지가 랜덤하게 매칭됨)
      return shuffledEmojis.map((emoji, index) => ({
        id: index,
        emoji,
        imagePath: shuffledImagePaths[index],
        isFlipped: false
      }));
    });
  }, []);

  return (
    <GameContainer>
      <GameArea>
        <CardGrid>
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              onClick={handleCardClick}
            />
          ))}
        </CardGrid>
      </GameArea>
      
      <ButtonContainer>
        <GameButton onClick={handleFlipAll}>
          🔄 전체 뒤집기
        </GameButton>
        <GameButton onClick={handleShuffle}>
          🎲 카드 섞기
        </GameButton>
      </ButtonContainer>
    </GameContainer>
  );
};

export default MemoryGame;

import React from 'react';
import styled from 'styled-components';
import MemoryGame from './components/MemoryGame';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Georgia', serif;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  color: #FFD700;
  font-size: 2.5rem;
  text-align: center;
  margin: 20px 0 40px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 15px 0 30px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 10px 0 20px 0;
    letter-spacing: 1px;
  }
`;

const Subtitle = styled.p`
  color: #B22222;
  font-size: 1.2rem;
  text-align: center;
  margin: -30px 0 30px 0;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: -25px 0 25px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: -15px 0 20px 0;
  }
`;

function App() {
  return (
    <AppContainer>
      <Title>🔍 Crime Scene Memory Game 🔍</Title>
      <Subtitle>Can you remember the evidence?</Subtitle>
      <MemoryGame />
    </AppContainer>
  );
}

export default App;

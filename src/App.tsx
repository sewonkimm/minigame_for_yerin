import React from "react";
import styled from "styled-components";
import MemoryGame from "./components/MemoryGame";
import "./App.css";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  color: #ffd700;
  font-size: min(4vw, 48px);
  text-align: center;
  margin: min(2vw, 20px) 0 min(3vw, 30px) 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: min(5vw, 36px);
    margin: min(1.5vw, 15px) 0 min(2.5vw, 25px) 0;
  }

  @media (max-width: 480px) {
    font-size: min(6vw, 28px);
    margin: min(1vw, 10px) 0 min(2vw, 20px) 0;
    letter-spacing: 1px;
  }
`;

const Subtitle = styled.p`
  color: #b22222;
  font-size: min(2vw, 24px);
  text-align: center;
  margin: min(-2vw, -20px) 0 min(2vw, 20px) 0;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: min(2.5vw, 18px);
    margin: min(-1.5vw, -15px) 0 min(1.5vw, 15px) 0;
  }

  @media (max-width: 480px) {
    font-size: min(3vw, 16px);
    margin: min(-1vw, -10px) 0 min(1vw, 10px) 0;
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

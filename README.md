# 🔍 Crime Scene Memory Game

추리·범죄 테마의 카드 뒤집기 메모리 게임입니다.

## 🎮 게임 기능

- **4x4 카드 배열**: 16장의 카드로 구성된 게임 보드
- **개별 카드 뒤집기**: 카드를 클릭하여 앞·뒷면 전환
- **전체 뒤집기**: 모든 카드를 동시에 뒤집기
- **카드 섞기**: 카드 위치를 무작위로 재배치하고 앞면으로 초기화
- **반응형 디자인**: 데스크톱과 모바일 모두 지원

## 🎯 사용된 이모지

☠️ 👣 🫀 🎭 🩸 👠 🎩 🎯 🃏 🔒 🔑 🧪 🩺 🔍 💼 ⏳

## 🛠 기술 스택

- **React 18** with TypeScript
- **Styled Components** for styling
- **CSS 3D Transforms** for card flip animations
- **Mobile-first responsive design**

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어서 게임을 즐기세요!

### 프로덕션 빌드

```bash
npm run build
```

## 🎨 디자인 테마

- **색상 팔레트**: 
  - 배경: 다크 그레이 그라데이션
  - 포인트 색상: 골드 (#FFD700)
  - 액센트 색상: 버건디 (#B22222)
- **폰트**: Georgia (serif)
- **애니메이션**: 카드 뒤집기 3D 효과

## 📱 반응형 지원

- **데스크톱**: 480px × 480px 카드 (대형)
- **태블릿**: 360px × 360px 카드 (중형)
- **모바일**: 270px × 270px 카드 (소형)

## 🎯 향후 확장 계획

- 타이머 및 점수 시스템
- 난이도 설정 (카드 개수 변경)
- 배경음악 및 효과음
- 기억 시간 제공 후 자동 뒤집기

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Card.tsx          # 개별 카드 컴포넌트
│   └── MemoryGame.tsx    # 메인 게임 컴포넌트
├── types/
│   └── Card.ts           # 카드 타입 정의
├── App.tsx               # 메인 앱 컴포넌트
└── index.tsx             # 애플리케이션 진입점

public/assets/card/       # 카드 뒷면 이미지 (1.jpg ~ 16.jpg)
```

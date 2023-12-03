import { createContext, ReactNode, useState } from "react";

import type { gameContext, gameState } from "@utils/types/context-types";

interface Props {
  children: ReactNode;
}

export const GameContext = createContext<gameContext>({
  gameState: {
    is_matched: false,
    scene: 1,
    turns_remaining: 5,
    player_1: {
      name: "",
      points: 0,
      guesses: [],
    },
    player_2: { name: "", points: 0, guesses: [] },
  },
  setGameState: () => {},
});

const GameProvider = ({ children }: Props) => {
  const [gameState, setGameState] = useState<gameState>({
    is_matched: false,
    scene: 6,
    turns_remaining: 5,

    player_1: {
      name: "Lydia",
      points: 0,
      guesses: [
        { word: "Friends", is_matched: true, matchy_word: "Community" },
        { word: "Sea", is_matched: false, matchy_word: "Water" },
        { word: "Homework", is_matched: true, matchy_word: "Laptop" },
      ],
    },
    player_2: {
      name: "Nonso",
      points: 0,
      guesses: [
        { word: "Friends", is_matched: true, matchy_word: "Community" },
        { word: "Cup", is_matched: false, matchy_word: "Water" },
        { word: "Homework", is_matched: true, matchy_word: "Laptop" },
      ],
    },
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

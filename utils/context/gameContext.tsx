import { createContext, ReactNode, useState } from "react";

import type { gameContext, gameState } from "@utils/types/context-types";

interface Props {
  children: ReactNode;
}

export const GameContext = createContext<gameContext>({
  gameState: {
    is_matched: false,
    scene: 4,
    turns_remaining: 5,
    player_1: { name: "", points: 0 },
    player_2: { name: "", points: 0 },
  },
  setGameState: () => {},
});

const GameProvider = ({ children }: Props) => {
  const [gameState, setGameState] = useState<gameState>({
    is_matched: false,
    scene: 4,
    turns_remaining: 5,
    player_1: { name: "Lydia", points: 0 },
    player_2: { name: "Nonso", points: 0 },
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

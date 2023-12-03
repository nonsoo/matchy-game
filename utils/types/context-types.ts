import { Dispatch, SetStateAction } from "react";

export interface gameContext {
  gameState: {
    turns_remaining: number;
    scene: number;
    player_1: { name: string; points: number };
    player_2: { name: string; points: number };
    is_matched: boolean;
  };
  setGameState: Dispatch<SetStateAction<gameState>>;
}

export type gameState = gameContext["gameState"];

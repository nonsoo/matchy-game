import { Dispatch, SetStateAction } from "react";

export interface gameContext {
  gameState: {
    turns_remaining: number;
    scene: number;
    player_1: {
      name: string;
      points: number;
      guesses: Array<{
        word: string;
        is_matched: boolean;
        matchy_word: string;
      }>;
    };
    player_2: {
      name: string;
      points: number;
      guesses: Array<{
        word: string;
        is_matched: boolean;
        matchy_word: string;
      }>;
    };
    is_matched: boolean;
  };
  setGameState: Dispatch<SetStateAction<gameState>>;
}

export type gameState = gameContext["gameState"];

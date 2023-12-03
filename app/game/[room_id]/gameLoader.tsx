"use client";
import { memo } from "react";

import styles from "@styles/page/game.module.css";

import Loading_screen from "./scene/loading-screen";
import First_word_loader from "./scene/first-word-loader";

import Guess_word from "./scene/guess-word";
import Answer_reveal from "./scene/answer-reveal";

import useGameContext from "@utils/hooks/use-game-context";

const Game = () => {
  const { gameState } = useGameContext();
  return (
    <main className={`mainC ${styles.mainWrapper}`}>
      {gameState.scene === 1 && (
        <Loading_screen player1="test1" player2="test2" />
      )}
      {gameState.scene === 2 && <First_word_loader />}
      {gameState.scene === 3 && <Guess_word />}
      {gameState.scene === 4 && (
        <Answer_reveal
          isMatched={gameState.is_matched}
          playerName_1={gameState.player_1.name}
          playerName_2={gameState.player_2.name}
          playerPoint_1={gameState.player_1.points}
          playerPoints_2={gameState.player_2.points}
        />
      )}
    </main>
  );
};

export default memo(Game);

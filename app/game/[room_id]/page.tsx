"use client";

import styles from "@styles/page/game.module.css";

import Loading_screen from "./scene/loading-screen";
import First_word_loader from "./scene/first-word-loader";

import Guess_word from "./scene/guess-word";
import Answer_reveal from "./scene/answer-reveal";

const Game = () => {
  return (
    <main className={`mainC ${styles.mainWrapper}`}>
      {/* <Loading_screen player1="test1" player2="test2" />
      <First_word_loader /> */}
      {/* <Guess_word /> */}
      <Answer_reveal isMatched={true} />
    </main>
  );
};

export default Game;

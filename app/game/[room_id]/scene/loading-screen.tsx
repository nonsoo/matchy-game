"use client";
import styles from "./styles/loading-screen.module.css";
import { useEffect } from "react";

import useToggle from "@utils/hooks/use-toggle";

import Player_badge_loader from "@components/player-badge-loader";
import Player_badge from "@components/player-badge";
interface Props {
  player1: string;
  player2: string;
}

const Loading_screen = ({ player1, player2 }: Props) => {
  const [resolvePlayers, , toggleResolvePlayers] = useToggle(false);
  useEffect(() => {
    let timer = setTimeout(() => toggleResolvePlayers(true), 3000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [toggleResolvePlayers]);
  return (
    <section className={styles.mainWrapper}>
      <p>First up is...</p>

      <div className={styles.players}>
        {resolvePlayers ? (
          <>
            <Player_badge name={player1} />
            <Player_badge name={player2} />
          </>
        ) : (
          <>
            <Player_badge_loader />
            <Player_badge_loader />
          </>
        )}
      </div>

      <p>
        Tip: You have 5 turns to guess the same word as your partner based on
        the word prompt
      </p>
    </section>
  );
};

export default Loading_screen;

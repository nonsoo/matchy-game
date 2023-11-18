import React from "react";
import styles from "@styles/components/player-badge.module.css";

interface Props {
  name: string;
}

const Player_badge = ({ name }: Props) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.circle}></div>
      <span className={styles.playerName}>{name}</span>
    </section>
  );
};

export default Player_badge;

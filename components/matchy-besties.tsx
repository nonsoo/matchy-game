import React from "react";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "@styles/page/matchyBestie.module.css";
import Player_badge from "@components/player-badge";

// gameState
interface Props {
  name_1: string;
  name_2: string;
}
const matchy_besties = ({ name_1, name_2 }: Props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.secDiv}>
        <FaHeart className={styles.icon} />
        <h1 className={styles.header}> Matchy Besties</h1>
        <p className={styles.subTitle}>You two had the most matched words</p>
        <div className={styles.players}>
          <Player_badge name={name_1} />
          <Player_badge name={name_2} />
        </div>
        <p className={styles.subTitle}>Matching words:</p>
        <div className={styles.playground}>Playground</div>
        <div className={styles.playground}>Playground</div>
        <div className={styles.playground}>Playground</div>
      </div>
      <AiOutlineEllipsis className={styles.ellipsis} />

      <button className={styles.shareBtn}>Share via ...</button>
      <button className={styles.leaderboardBtn}>See full leaderboard</button>
    </div>
  );
};

export default matchy_besties;

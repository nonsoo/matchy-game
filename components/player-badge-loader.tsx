import React from "react";
import styles from "@styles/components/player-badge.module.css";

const Player_badge_loader = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.circle}></div>
      <span className={styles.loading_name}></span>
    </section>
  );
};

export default Player_badge_loader;

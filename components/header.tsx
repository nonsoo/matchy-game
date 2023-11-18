import React from "react";
import styles from "@styles/page/start-game.module.css";

const header = () => {
  return (
    <header className={`mainC ${styles.header}`}>
      <p className={styles.header_title}>matchymatchy.tv</p>
    </header>
  );
};

export default header;

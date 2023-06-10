import styles from "./page.module.css";

import StartGame from "./_components/start-game";

export default function Home() {
  return (
    <main className="mainC">
      <header className={styles.header}>
        <p className={styles.header_title}>matchymatchy.tv</p>
      </header>

      <StartGame />
    </main>
  );
}

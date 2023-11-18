import Header from "@components/header";

import styles from "@styles/page/lobby.module.css";
import PlayerBadge from "@components/player-badge";

interface Props {
  params: { room_id: string };
}

const Lobby = ({ params }: Props) => {
  return (
    <>
      <Header />
      <main className={`mainC ${styles.mainWrapper}`}>
        <section className={styles.lobby_stats}>
          <p>max players: 12</p>
          <p>players in room: 8</p>
        </section>
        <p className={styles.roomID}>
          Room ID: <span className={styles.roomID_id}>{params.room_id}</span>
        </p>

        <section className={styles.joinedPlayers}>
          <PlayerBadge name="tessdsdsdfsdcsdcsdt" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
          <PlayerBadge name="test" />
        </section>
        <button className={styles.startGame_btn} type="button">
          Start game
        </button>
      </main>
    </>
  );
};

export default Lobby;

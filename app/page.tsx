import "@styles/layout.css";
import styles from "@styles/page/start-game.module.css";

import Text_field_stateless from "../components/generic-components/text-field-stateless";

export default function Home() {
  return (
    <>
      {" "}
      <header className={`mainC ${styles.header}`}>
        <p className={styles.header_title}>matchymatchy.tv</p>
      </header>
      <main className="mainC">
        <form className={styles.start_game_form}>
          <Text_field_stateless
            labelID="room-id"
            labelName="Room ID"
            maxLength={6}
            place_holder="Enter RoomID"
            required
          />
          <Text_field_stateless
            labelID="user-name"
            labelName="User Name"
            maxLength={256}
            place_holder="Enter your name"
            required
          />

          <button className={styles.startGame_btn} type="submit">
            Join
          </button>
        </form>
      </main>
    </>
  );
}

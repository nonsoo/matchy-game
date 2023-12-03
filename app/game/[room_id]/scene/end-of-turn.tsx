import styles from "./styles/end-of-turn.module.css";

const EndofTurn = () => {
  return (
    <p className={styles.eot_message}>
      End of your turn, let’s round up your matches
    </p>
  );
};

export default EndofTurn;

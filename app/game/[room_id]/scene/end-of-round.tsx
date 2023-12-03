import styles from "./styles/end-of-turn.module.css";
import useGameContext from "@utils/hooks/use-game-context";

const EndofRound = () => {
  const { gameState } = useGameContext();
  return (
    <p className={styles.eor_message}>
      That’s the end of round <span>{gameState.round}</span> let’s see who’s in
      the lead
    </p>
  );
};

export default EndofRound;

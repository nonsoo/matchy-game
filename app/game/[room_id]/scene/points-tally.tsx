import useGameContext from "@utils/hooks/use-game-context";

import Player_badge from "@components/player-badge";
import styles from "./styles/points-tally.module.css";

const Points_tally = () => {
  const { gameState } = useGameContext();

  const number_of_matched_words = gameState.player_1.guesses.filter(
    (guess) => guess.is_matched === true
  );
  return (
    <section>
      <p className={styles.Title}>Your Matches</p>
      <section className={styles.players}>
        <Player_badge
          name={gameState.player_1.name}
          variant={{ variant: "point", point: gameState.player_1.points }}
        />
        <Player_badge
          name={gameState.player_2.name}
          variant={{ variant: "point", point: gameState.player_2.points }}
        />
      </section>

      <section className={styles.pointsTally_wrapper}>
        {gameState.player_1.guesses.map((guess, index) => (
          <div className={styles.pointContainer} key={index}>
            <p>{guess.word}</p>
            <p>{guess.matchy_word}</p>
            <p>{gameState.player_2.guesses[index].word}</p>
          </div>
        ))}
      </section>

      <p className={styles.tally_message}>
        {"You've"} earned {number_of_matched_words.length} points this round!!
      </p>
    </section>
  );
};

export default Points_tally;

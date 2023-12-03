import styles from "./styles/answer-reveal.module.css";
import GuessedWord from "@components/guessed-word";
import IconContext from "@utils/context/IconContext";
import { FaRegCircleCheck } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Player_badge from "@components/player-badge";

interface Props {
  isMatched: boolean;
  playerName_1: string;
  playerPoint_1: number;
  playerName_2: string;
  playerPoints_2: number;
}
const answer_reveal = ({
  isMatched,
  playerName_1,
  playerName_2,
  playerPoints_2,
  playerPoint_1,
}: Props) => {
  if (isMatched === true)
    return (
      <section className={styles.mainWrapper}>
        <section className={styles.mainWrapper_mini}>
          <p className={styles.word}>Community</p>
          <div className={styles.guessedWords}>
            <Player_badge
              name={playerName_1}
              variant={{ variant: "point", point: playerPoint_1 }}
            />
            <GuessedWord word="playground" />
            <IconContext className={styles.guessedWords_icon}>
              <FaRegCircleCheck />
            </IconContext>
            <GuessedWord word="playground" />
          </div>
          <Player_badge
            name={playerName_2}
            variant={{ variant: "point", point: playerPoints_2 }}
          />
        </section>
        <p className={styles.notMatched_message}>
          OMG!!! {`Y'all`} are two peas in a pod!
        </p>
      </section>
    );

  if (isMatched === false)
    return (
      <section className={styles.mainWrapper}>
        <p className={styles.notMatched_message}>
          OOh so close! but not the same..
        </p>
        <p className={styles.word}>Community</p>
        <div className={styles.guessedWords}>
          <GuessedWord word="playground" exCSS={styles.GuessedWords_word} />
          <IconContext className={styles.guessedWords_icon}>
            <AiOutlineCloseCircle />
          </IconContext>
          <GuessedWord word="playground" exCSS={styles.GuessedWords_word} />
        </div>
      </section>
    );
};

export default answer_reveal;

import styles from "@styles/generic.module.css";

interface Props {
  word: string;
  exCSS?: string;
}

const guessed_Word = ({ word, exCSS }: Props) => {
  return <p className={`${styles.guessedWord} ${exCSS}`}>{word}</p>;
};

export default guessed_Word;

import styles from "./styles/guess-word.module.css";
import Turns_remaining_display from "@components/turns_remaining_display";
import Count_down from "@components/count-down";
import Text_field_stateless from "@components/generic-components/text-field-stateless";

const guess_word = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.statsWrapper}>
        <Turns_remaining_display turns_remaining={5} />
        <Count_down />
      </div>
      <p className={styles.word}>Community</p>
      <Text_field_stateless
        labelID="guess"
        labelName="Type your guess below"
        maxLength={256}
        place_holder=""
      />
    </section>
  );
};

export default guess_word;

import styles from "@styles/components/turns-remaining.module.css";

interface Props {
  turns_remaining: number;
}
const turns_remaining_display = ({ turns_remaining }: Props) => {
  return (
    <section className={styles.mainWrapper}>
      <p className={styles.text}>Turns left:</p>

      <div className={styles.circles}>
        {[...Array(turns_remaining)].map((item, index) => (
          <div key={index} className={styles.circles__item}></div>
        ))}
      </div>
    </section>
  );
};

export default turns_remaining_display;

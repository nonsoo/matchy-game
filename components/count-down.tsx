"use client";

import styles from "@styles/components/count-down.module.css";

import useCountdown from "@utils/hooks/use-countdown";

const Count_down = () => {
  const [counter] = useCountdown(10);

  return (
    <section className={styles.mainWrapper}>
      <div className={styles.countdown}>
        <p className={styles.countdown__title}>Time remaining: {counter}</p>
        <div className={styles.outerBar}>
          <div
            className={styles.innerBar}
            style={{ translate: `${(counter / 10) * 100}% 0` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Count_down;

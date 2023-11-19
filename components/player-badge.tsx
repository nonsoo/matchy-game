import React from "react";
import styles from "@styles/components/player-badge.module.css";

interface DefaultVariant {
  variant: "default";
}

interface PointVariant {
  variant: "point";
  point: number;
}
interface Props {
  name: string;
  variant?: DefaultVariant | PointVariant;
}

const Player_badge = ({ name, variant = { variant: "default" } }: Props) => {
  if (variant.variant === "point")
    return (
      <section className={styles.mainWrapper}>
        <div className={styles.circle}></div>
        <span className={styles.playerName}>{name}</span>
        <span className={styles.playerName}>Points: {variant.point}</span>
      </section>
    );

  if (variant.variant === "default")
    return (
      <section className={styles.mainWrapper}>
        <div className={styles.circle}></div>
        <span className={styles.playerName}>{name}</span>
      </section>
    );
};

export default Player_badge;

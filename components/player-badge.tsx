import React from "react";
import styles from "@styles/components/player-badge.module.css";
import { FaCrown } from "react-icons/fa6";
import IconContext from "@utils/context/IconContext";

interface DefaultVariant {
  variant: "default";
}

interface PointVariant {
  variant: "point";
  point: number;
}

interface LeaderBoardVariant {
  variant: "leader_board";
  point: number;
  crown: boolean;
}
interface Props {
  name: string;
  variant?: DefaultVariant | PointVariant | LeaderBoardVariant;
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

  if (variant.variant === "leader_board")
    return (
      <section
        className={styles.mainWrapper}
        data-is_leaderboard={variant.crown}
      >
        {variant.crown && (
          <IconContext className={styles.crown}>
            <FaCrown />
          </IconContext>
        )}

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

import styles from "@styles/generic.module.css";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  name: string;
  exCSS?: string;
  onToggle?: () => void;
  children?: ReactNode;
  isDisabled?: boolean;
  href?: string;
  typeOfBtn?: "button" | "reset" | "submit";
}
const Btn = ({
  name,
  exCSS,
  onToggle,
  children,
  isDisabled,
  href,
  typeOfBtn = "button",
}: Props) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`default_Link ${styles.Button} ${exCSS}`}
        data-disabled={isDisabled}
      >
        {name}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.Button} ${exCSS}`}
      onClick={onToggle}
      disabled={isDisabled}
      data-disabled={isDisabled}
      type={typeOfBtn}
    >
      {children && <span className={styles.Button_Span}>{children}</span>}
      <p>{name}</p>
    </button>
  );
};

export default Btn;

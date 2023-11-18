import { Dispatch, SetStateAction } from "react";
import styles from "@styles/generic.module.css";

interface Props {
  id: string;
  type: "text" | "email";
  placeHolder_text?: string;
  labelName: string;
  textState: string;
  setTextState: Dispatch<SetStateAction<string>>;
  required?: boolean;
  maxChar?: number;
  minChar?: number;
}

const Labelled_text_field = ({
  id,
  type,
  placeHolder_text,
  labelName,
  textState,
  setTextState,
  required = false,
  maxChar,
  minChar,
}: Props) => {
  return (
    <section className={styles.inputField}>
      <label htmlFor={id} className={styles.inputField_label}>
        {labelName}
      </label>
      <input
        type={type}
        id={id}
        className={styles.inputField_text}
        onChange={(e) => setTextState(e.target.value)}
        value={textState}
        placeholder={placeHolder_text}
        required={required}
        maxLength={maxChar}
        minLength={minChar}
      />
    </section>
  );
};

export default Labelled_text_field;

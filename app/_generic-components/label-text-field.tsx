import { Dispatch, SetStateAction } from "react";
import styles from "@styles/generic.module.css";

interface Props {
  id: string;
  type: "text" | "email";
  placeHolder_text?: string;
  labelName: string;
  textState: string;
  setTextState: Dispatch<SetStateAction<string>>;
  exCSS_container?: string;
  exCSS_label?: string;
  exCSS_input?: string;
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
  exCSS_container,
  exCSS_label,
  exCSS_input,
  required = false,
  maxChar,
  minChar,
}: Props) => {
  return (
    <div className={exCSS_container}>
      <label
        htmlFor={id}
        className={`${styles.LabelTextField_label} ${exCSS_label}`}
      >
        {labelName}
      </label>
      <input
        type={type}
        id={id}
        className={`${styles.LabelTextField_input} ${exCSS_input}`}
        onChange={(e) => setTextState(e.target.value)}
        value={textState}
        placeholder={placeHolder_text}
        required={required}
        maxLength={maxChar}
        minLength={minChar}
      />
    </div>
  );
};

export default Labelled_text_field;

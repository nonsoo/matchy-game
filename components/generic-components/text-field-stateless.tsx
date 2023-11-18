import React from "react";
import styles from "@styles/generic.module.css";

interface Props {
  labelName: string;
  labelID: string;
  place_holder: string;
  maxLength: number;
  required?: boolean;
}

const text_field_stateless = ({
  labelName,
  labelID,
  place_holder,
  maxLength,
  required,
}: Props) => {
  return (
    <section className={styles.inputField}>
      <label htmlFor={labelID} className={styles.inputField_label}>
        {labelName}
      </label>
      <input
        type="text"
        id={labelID}
        className={styles.inputField_text}
        placeholder={place_holder}
        maxLength={maxLength}
        required={required}
      />
    </section>
  );
};

export default text_field_stateless;

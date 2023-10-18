"use client";

import styles from "@styles/page/game.module.css";
import { useState, FormEvent } from "react";
import TextField from "../_generic-components/label-text-field";
import Btn from "../_generic-components/Btn";

const Page = () => {
  const words = ["page", "game", "alphabet", "water bottle", "keyboard"];
  const [userInput, setUserInput] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={`mainC ${styles.mainWrapper}`} onSubmit={onSubmit}>
      <p className={styles.triggerWord}>{words[0]}</p>

      <TextField
        id="guess"
        labelName="Enter your matchy word"
        type="text"
        textState={userInput}
        setTextState={setUserInput}
        exCSS_container={styles.textField}
      />

      <Btn name="Submit" exCSS={styles.submit_Btn} typeOfBtn="submit" />
    </form>
  );
};

export default Page;

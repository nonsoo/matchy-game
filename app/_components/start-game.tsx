"use client";

import styles from "../page.module.css";
import { useState } from "react";
import useToggle from "@utils/hooks/use-toggle";
import TextField from "../_generic-components/label-text-field";
import Btn from "../_generic-components/Btn";

const Start_game = () => {
  const [userName, setUserName] = useState("");
  const [roomID, setRoomID] = useState("");

  const [showCreateRoom, toggleCreateRoom] = useToggle();

  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      {showCreateRoom ? (
        <p>hello</p>
      ) : (
        <form className={styles.start_game} onSubmit={onSubmit}>
          <TextField
            id="room-id"
            labelName="Room Id"
            type="text"
            textState={roomID}
            setTextState={setRoomID}
            required
            maxChar={6}
            placeHolder_text="Enter 6-letter code"
          />
          <TextField
            id="user-name"
            labelName="User Name"
            type="text"
            textState={userName}
            setTextState={setUserName}
            required
            maxChar={12}
            placeHolder_text="Enter your name"
          />
          <Btn name="Play" typeOfBtn="submit" exCSS={styles.startBtn} />
        </form>
      )}
    </>
  );
};

export default Start_game;

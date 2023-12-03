"use client";

import GameLoader from "./gameLoader";
import GameProvider from "@utils/context/gameContext";

const Game = () => {
  return (
    <GameProvider>
      <GameLoader />
    </GameProvider>
  );
};

export default Game;

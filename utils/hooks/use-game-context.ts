import { useContext } from "react";
import { GameContext } from "@utils/context/gameContext";

const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context)
    throw new Error("Context can only be accessed inside of a provider");

  return context;
};

export default useGameContext;

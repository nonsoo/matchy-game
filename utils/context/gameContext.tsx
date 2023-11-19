import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface gameContext {
  turns_remaining: number;
  set_turns_remaining: Dispatch<SetStateAction<number>>;
}

interface Props {
  children: ReactNode;
}

export const GameContext = createContext<gameContext>({
  turns_remaining: 5,
  set_turns_remaining: () => {},
});

const GameProvider = ({ children }: Props) => {
  const [turns_remaining, set_turns_remaining] = useState(5);
  return (
    <GameContext.Provider value={{ turns_remaining, set_turns_remaining }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

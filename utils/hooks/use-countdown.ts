import { useState, useEffect, useCallback } from "react";

type useCountdownHook = (initial_count: number) => [number, () => void];

const useCountdown: useCountdownHook = (initial_count) => {
  const [counter, setCounter] = useState(initial_count);

  useEffect(() => {
    const interval = setInterval(() => setCounter((prev) => prev - 1), 1000);

    if (counter === 0) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [counter]);

  const resetCounter = useCallback(() => {
    setCounter(initial_count);
  }, [initial_count]);

  return [counter, resetCounter];
};

export default useCountdown;

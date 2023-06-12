import { useState, useCallback, useEffect } from "react";

type IuseAlert = (timeOut?: number) => [boolean, () => void];

const useAlert: IuseAlert = (timeOut = 3000) => {
  const [result, setResult] = useState(false);

  const alertFn = useCallback(() => {
    setResult(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (result) {
      timer = setTimeout(() => setResult(false), timeOut);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timeOut, result]);

  return [result, alertFn];
};

export default useAlert;

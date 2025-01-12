import { useEffect } from "react";

const useIntervalHook = (callback: Function, delay?: number) => {
  useEffect(() => {
    const interval = setInterval(() => callback(), delay || 0);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

export default useIntervalHook;

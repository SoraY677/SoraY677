import { useEffect, useState } from "react";

/**
 * クライアントサイドの判定
 * @returns
 */
const useIsClientHook = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

export default useIsClientHook;

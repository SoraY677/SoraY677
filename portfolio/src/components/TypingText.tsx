import { useEffect, useState } from "react";
import { TYPING_SPEED_MS } from "../config/TopConfig";

type Props = {
  text: string;
  typingSpeedMs?: number;
};

const TypingText = ({ text, typingSpeedMs = TYPING_SPEED_MS }: Props) => {
  const [typedText, setTypedText] = useState<string>("");

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    (async () => {
      await sleep(typingSpeedMs);
      const currentText = `${text.slice(0, typedText.length + 1)}`;
      setTypedText(currentText);
    })();
  }, [typedText, typingSpeedMs, text]);

  return <span>{typedText}</span>;
};

export default TypingText;

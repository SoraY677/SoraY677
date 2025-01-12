import { useEffect, useState } from "react";

type Props = {
  text: string;
};

const TypingText = ({ text }: Props) => {
  const [typedText, setTypedText] = useState<string>("");

  const typeText = (textAll: string, length: number = 1) => {
    const randomInterval = Math.floor(Math.random() * 350) + 50;
    if (length > textAll.length) return;
    setTimeout(() => {
      setTypedText(textAll.slice(0, length));
      typeText(textAll, length + 1);
    }, randomInterval);
  };

  useEffect(() => {
    if (text) typeText(text);
  }, [text]);

  return <span>{typedText}</span>;
};

export default TypingText;

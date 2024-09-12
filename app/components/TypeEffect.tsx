"use client";
import { useEffect, useState } from "react";

type TypeEffect = {
  text: string;
  duration: number;
  delay?: number;
};
const TypeEffect = ({ text, duration, delay = 0 }: TypeEffect) => {
  const [index, setIndex] = useState(0);
  const [res, setRes] = useState("");
  const [varDelay, setDelay] = useState(delay);

  useEffect(() => {
    const startTyping = () => {
      setDelay(0);
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setRes(
            text.slice(0, index + 1) + '<span class="blinking-cursor"> .</span>'
          );
          setIndex(index + 1);
        }, Math.random() * duration + duration / 2);

        return () => clearTimeout(timeout);
      } else {
        setRes(text);
        setDelay(delay);
      }
    };

    setTimeout(startTyping, varDelay);
  }, [index, text, duration, varDelay]); // وابستگی به index باعث می‌شود که تایپ کردن ادامه پیدا کند

  return <div dangerouslySetInnerHTML={{ __html: res }} />;
};

export default TypeEffect;

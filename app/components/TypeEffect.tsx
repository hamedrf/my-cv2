"use client";
import { useEffect, useState } from "react";

const TypeEffect = (props: { text: string; duration: number }) => {
  const [index, setIndex] = useState(0);
  const [res, setRes] = useState("");

  useEffect(() => {
    if (index < props.text.length) {
      const timeout = setTimeout(() => {
        setRes(
          props.text.slice(0, index + 1) +
            '<span class="blinking-cursor"> .</span>'
        );
        setIndex(index + 1);
      }, Math.random() * props.duration + props.duration / 2);

      return () => clearTimeout(timeout);
    } else {
      setRes(props.text);
    }
  }, [index, props.text, props.duration]);

  return <div dangerouslySetInnerHTML={{ __html: res }} />;
};

export default TypeEffect;

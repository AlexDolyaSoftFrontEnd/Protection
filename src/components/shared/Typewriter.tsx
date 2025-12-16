"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Typewriter({ textDef }: { textDef: string }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Observer to check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio === 1);
      },
      { threshold: 1.0 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && index < textDef.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + textDef[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, textDef, isVisible]);

  return (
    <div ref={ref} className="relative w-full whitespace-normal break-words">
      <p className=" indent-7">{text}</p>
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </AnimatePresence>
    </div>
  );
}

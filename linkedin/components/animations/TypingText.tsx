"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TypingText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 50); // Speed
      return interval;
    };

    if (delay > 0) {
      timeout = setTimeout(() => {
        const interval = startTyping();
        return () => clearInterval(interval);
      }, delay * 1000);
    } else {
      const interval = startTyping();
      return () => clearInterval(interval);
    }

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-neon-cyan ml-1 align-middle"
      />
    </span>
  );
}

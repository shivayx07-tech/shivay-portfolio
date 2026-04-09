"use client";

import { motion } from "framer-motion";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="absolute top-0 left-0 -ml-[2px] text-neon-cyan opacity-70 mix-blend-screen"
        animate={{
          x: [-2, 2, -1, 1, 0],
          y: [1, -1, 1, -2, 0],
          opacity: [0.8, 0.3, 0.8, 0.4, 0.8],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 ml-[2px] text-neon-violet opacity-70 mix-blend-screen"
        animate={{
          x: [2, -2, 1, -1, 0],
          y: [-1, 1, -1, 2, 0],
          opacity: [0.8, 0.4, 0.9, 0.3, 0.8],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          delay: 0.1,
        }}
      >
        {text}
      </motion.span>
      <span className="relative z-10">{text}</span>
    </div>
  );
}

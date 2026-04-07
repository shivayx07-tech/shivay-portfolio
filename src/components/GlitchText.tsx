import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

interface GlitchTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function GlitchText({ text, className, speed = 50 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const triggerGlitch = () => {
      setIsGlitching(true);
      let iterations = 0;
      
      interval = setInterval(() => {
        setDisplayText(prev => 
          prev.split('').map((char, index) => {
            if (index < iterations) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('')
        );
        
        if (iterations >= text.length) {
          clearInterval(interval);
          setIsGlitching(false);
        }
        
        iterations += 1/3;
      }, speed);
    };

    const timeout = setTimeout(triggerGlitch, 2000 + Math.random() * 3000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed]);

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -z-10 text-red-500 opacity-70 animate-pulse translate-x-[2px]">
            {displayText}
          </span>
          <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 animate-pulse -translate-x-[2px]">
            {displayText}
          </span>
        </>
      )}
    </div>
  );
}

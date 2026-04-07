import React, { useState, useEffect, useRef } from 'react';

const LOG_MESSAGES = [
  "INITIALIZING NEURAL INTERFACE...",
  "CONNECTING TO EDGE NETWORKS...",
  "DECRYPTING PORTFOLIO DATA...",
  "ENHANCING 3D RENDERING PIPELINE...",
  "OPTIMIZING SHADERS AND MESHES...",
  "SYNCING PROJECT REPOSITORIES...",
  "AI AGENT ACTIVE: SHIVA.DEV",
  "ACCESSING SECURE LAYER 7...",
  "STATUS: SYSTEM STABLE.",
  "READY FOR USER INPUT."
];

export default function Terminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < LOG_MESSAGES.length) {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${LOG_MESSAGES[index]}`]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-black/80 border border-cyan-500/50 p-4 rounded-sm h-[300px] overflow-y-auto font-mono text-xs text-cyan-400/80 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
      <div ref={containerRef} className="space-y-1">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-white/30 shrink-0">{'>'}</span>
            <span>{log}</span>
          </div>
        ))}
        <div className="w-2 h-4 bg-cyan-400/80 animate-pulse inline-block align-middle ml-1" />
      </div>
    </div>
  );
}

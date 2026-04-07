import React from 'react';
import ThreeScene from '@/components/ThreeScene';
import Terminal from '@/components/Terminal';
import GlitchText from '@/components/GlitchText';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Activity, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Shield, label: 'Security', value: 98, color: 'text-green-500' },
  { icon: Zap, label: 'Performance', value: 100, color: 'text-yellow-500' },
  { icon: Cpu, label: 'Neural Load', value: 45, color: 'text-blue-500' },
  { icon: Activity, label: 'Link Status', value: 100, color: 'text-cyan-500' },
];

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-black text-cyan-400 font-mono overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 bg-black shadow-[inset_0_0_100px_rgba(0,242,255,0.15)]">
        <ThreeScene />
      </div>

      {/* Overlay UI */}
      <div className="relative z-10 p-8 h-screen grid grid-cols-12 grid-rows-6 gap-6 pointer-events-none bg-black/20">
        
        {/* Header */}
        <header className="col-span-12 flex justify-between items-center pointer-events-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors">
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
            </Link>
            <div className="h-10 w-[2px] bg-cyan-500/50" />
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-white uppercase">
                <GlitchText text="SYSTEM_MANIFEST" />
              </h1>
              <p className="text-[10px] opacity-50 tracking-[0.2em]">NEURAL INTERFACE V1.0.4</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase opacity-70">Uptime: 24:12:05</p>
            <p className="text-xs text-blue-400 tracking-wider">SECURE CONNECTION: TRUE</p>
          </div>
        </header>

        {/* Left Sidebar - Stats */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="col-span-3 row-span-4 space-y-4 pointer-events-auto"
        >
          <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-sm p-4 rounded-sm">
            <h3 className="text-[10px] uppercase opacity-50 mb-4 border-b border-cyan-500/20 pb-2">Diagnostic Data</h3>
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-xs text-white/70">{stat.label}</span>
                    </div>
                    <span className="text-xs">{stat.value}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full ${stat.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-sm p-4 rounded-sm h-[200px]">
            <h3 className="text-[10px] uppercase opacity-50 mb-2 border-b border-cyan-500/20 pb-2">Network Topology</h3>
            <div className="flex flex-wrap gap-2">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 border ${Math.random() > 0.3 ? 'border-cyan-500/30' : 'border-blue-500/30'} flex items-center justify-center animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className={`w-1 h-1 ${Math.random() > 0.3 ? 'bg-cyan-500' : 'bg-blue-400'}`} />
                    </div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Center - Central Portrait Focus */}
        <div className="col-span-6 row-span-4 flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
            >
                {/* Scanning Rings */}
                <div className="absolute -inset-8 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-12 border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute -inset-4 border-2 border-t-white/30 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                
                {/* Main Portrait Container */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-black/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent z-10 pointer-events-none" />
                    <img 
                        src="https://i.postimg.cc/1zj3YL3K/IMG-2961.jpg" 
                        alt="Software Engineer" 
                        className="w-full h-full object-cover grayscale brightness-125 contrast-125"
                    />
                    {/* Scanning Line Overlay */}
                    <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-white/40 z-20 shadow-[0_0_15px_white]"
                    />
                </div>

                {/* Identity Tag */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
                >
                    <h2 className="text-2xl font-black text-white tracking-[0.3em] uppercase mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        Shiva Yadav
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-[1px] w-8 bg-white/30" />
                        <span className="text-[10px] text-cyan-400 tracking-widest uppercase font-bold">Lead Software Architect</span>
                        <span className="h-[1px] w-8 bg-white/30" />
                    </div>
                </motion.div>
            </motion.div>
        </div>

        {/* Right Sidebar - Terminal */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="col-span-3 row-span-4 pointer-events-auto"
        >
          <div className="h-full flex flex-col">
            <h3 className="text-[10px] uppercase opacity-50 mb-2 px-2">Console v1.0.4 - Link: Active</h3>
            <Terminal />
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="col-span-12 self-end flex justify-between items-center py-4 border-t border-cyan-500/20 pointer-events-auto">
          <div className="text-[10px] opacity-40 uppercase tracking-widest">
            (c) 2026 Shiva.dev // All Rights Reserved
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-60">
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Neural Core: Online
            </span>
            <span>Region: EU-WEST-1</span>
            <span>Thread_id: 0x4f2a</span>
          </div>
        </footer>

      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#00f2ff33 1px, transparent 1px), linear-gradient(90deg, #00f2ff33 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />
    </div>
  );
}

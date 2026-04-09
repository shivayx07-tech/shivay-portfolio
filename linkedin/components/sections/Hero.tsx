"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ParticleBackground from "../3d/ParticleBackground";
import { GlitchText } from "../animations/GlitchText";
import { TypingText } from "../animations/TypingText";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Dynamic Cinematic Background Layer */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 w-full h-full mix-blend-screen opacity-50 pointer-events-none">
        <Image
          src="/hero_bg_clean.png"
          alt="Neural Network Flow"
          fill
          className="object-cover object-center scale-[1.05]"
          priority
        />
      </motion.div>
      
      {/* Precision Contrast Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_80%)] opacity-80 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      
      <ParticleBackground />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
          className="space-y-6 flex flex-col items-center"
        >
          {/* Frosted Glass Pill for the Sequence Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
          >
            <p className="text-neon-cyan font-mono tracking-[0.25em] uppercase text-xs font-semibold">
              Initiating Sequence...
            </p>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] relative">
            <span className="whitespace-nowrap">
              <GlitchText text="Shivay Yadav" />
            </span>
          </h1>
          
          <h2 className="text-lg md:text-2xl text-white font-light mt-6 tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-xl bg-black/20 backdrop-blur-sm px-6 py-2 rounded-xl border border-white/5">
            <TypingText text="Engineering Intelligent Systems. Designing the Future." delay={0.5} />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col sm:flex-row gap-6 relative z-20"
        >
          <MagneticButton primary onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/40 !text-base !px-8 !py-4 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all">
            Explore My Work
          </MagneticButton>
          <MagneticButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-transparent border border-white/15 hover:border-white/40 hover:bg-white/5 !text-base !px-8 !py-4 text-white hover:text-white transition-all shadow-lg backdrop-blur-md">
            Contact Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-all z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        onClick={scrollToAbout}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 font-sans text-white/70">Scroll To Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md"
        >
          <ChevronDown className="w-5 h-5 text-white/90" />
        </motion.div>
      </motion.div>
    </section>
  );
}

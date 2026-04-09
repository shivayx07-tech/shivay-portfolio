"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="contact" className="relative w-full py-32 bg-[#050505] overflow-hidden min-h-[800px] flex items-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none">
        <Image
          src="/contact_bg.png"
          alt="Communication Terminal"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            <span className="text-neon-violet mr-2">&gt;</span>System.connect()
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-violet to-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 glass-card p-10 rounded-3xl bg-[#050505]/80 backdrop-blur-3xl"
          >
            <h3 className="text-3xl font-bold tracking-tight">Initiate Communications</h3>
            <p className="text-white/60 text-lg">
              Open a secure channel to discuss intelligent systems, analytics, or future collaborations.
            </p>

            <div className="space-y-6 pt-8">
              <a href="mailto:shivayx07@gmail.com" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-[0.1em] mb-1 font-mono">Email</p>
                  <p className="font-semibold text-lg group-hover:text-neon-cyan transition-colors">shivayx07@gmail.com</p>
                </div>
              </a>

              <a href="tel:7317492268" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-neon-violet/20 group-hover:text-neon-violet group-hover:scale-110 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-[0.1em] mb-1 font-mono">Terminal Node</p>
                  <p className="font-semibold text-lg group-hover:text-neon-violet transition-colors">+91 7317492268</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-neon-blue/20 group-hover:text-neon-blue transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-[0.1em] mb-1 font-mono">Location</p>
                  <p className="font-semibold text-lg">Kanpur, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 glass-card p-10 rounded-3xl bg-[#050505]/80 backdrop-blur-3xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Designation (Name)"
                className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-white/30 focus:outline-none focus:border-neon-cyan transition-colors z-10 relative"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-focus-within:w-full transition-all duration-500 ease-out" />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Signal Address (Email)"
                className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-white/30 focus:outline-none focus:border-neon-violet transition-colors z-10 relative"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-violet group-focus-within:w-full transition-all duration-500 ease-out" />
            </div>

            <div className="relative group flex-grow">
              <textarea
                placeholder="Transmission Payload (Message)"
                className="w-full h-full min-h-[150px] bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-white/30 focus:outline-none focus:border-neon-blue transition-colors z-10 relative resize-none"
              />
              <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-focus-within:w-full transition-all duration-500 ease-out" />
            </div>

            <div className="pt-6 mt-auto">
              <MagneticButton primary className="w-full">
                Transmit Signal
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

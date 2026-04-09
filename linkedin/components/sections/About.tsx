"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, BrainCircuit, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 bg-[#110f1c] overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/10 blur-[150px] opacity-40 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-violet/10 blur-[150px] opacity-40 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-40">
        
        {/* Core Expertise Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Core Expertise: A Blend of Development and Data
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-4">
              <Code2 className="w-10 h-10 text-neon-blue" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white">Aspiring Software Developer</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Focused on mastering C++ and Data Structures and Algorithms (DSA) for robust software creation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
              <BrainCircuit className="w-10 h-10 text-neon-violet" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white">Business Intelligence Analyst</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Skilled in leveraging data to drive strategic business decisions and insights.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-4">
              <BarChart3 className="w-10 h-10 text-neon-cyan" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white">Data Analytics & Modeling</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Proficient in analytical techniques, using tools like Python and Power BI for complex data modeling.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Academic Journey Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-12">
                Academic Journey: Computer Software Engineering
              </h2>

              <div className="relative pl-8 border-l-2 border-[#2d1f4b]">
                <div className="absolute w-4 h-4 bg-neon-violet rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                <h3 className="text-2xl font-medium text-white mb-2">CSJMU, Kanpur</h3>
                <p className="text-white/80 mb-2 font-light">Bachelor of Technology - BTech, Computer Software Engineering</p>
                <p className="text-white/50 text-sm font-mono">July 2024 - September 2028</p>
              </div>

              <div className="relative pl-8 border-l-2 border-[#2d1f4b]">
                <div className="absolute w-4 h-4 bg-[#2d1f4b] rounded-full -left-[9px] top-1" />
                <h3 className="text-2xl font-medium text-white mb-2">Nurture International School</h3>
                <p className="text-white/80 mb-2 font-light">Foundation in Computer Software Engineering</p>
                <p className="text-white/50 text-sm font-mono">July 2008 - September 2024</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/campus_illustration.png"
                alt="University Campus"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

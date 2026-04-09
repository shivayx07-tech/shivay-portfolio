"use client";

import { motion } from "framer-motion";
import { TerminalSquare, LineChart, Code2 } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 bg-gradient-to-b from-[#110f1c] to-[#1a2035] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-32">
        
        {/* Technical Skill Stack */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Technical Skill Stack
            </h2>
            <p className="text-lg text-white/60 font-light">
              A strong foundation in both front-end development and powerful data analysis tools.
            </p>
          </motion.div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {[
              { title: "Web Design", desc: "Creating visually appealing and functional user interfaces." },
              { title: "HTML", desc: "Expertise in structuring content for the web." },
              { title: "CSS", desc: "Styling and layout mastery for responsive design." },
              { title: "SQL", desc: "Database management and querying for data retrieval." },
              { title: "Python", desc: "Scripting and data manipulation for analytical tasks." },
              { title: "Power BI", desc: "Developing interactive dashboards and data visualizations." }
            ].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#2d1b54] p-8 hover:bg-[#392468] transition-colors"
              >
                <h3 className="text-2xl font-light text-white mb-4">{skill.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Programming Languages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Key Programming Languages
            </h2>
            <p className="text-lg text-white/60 font-light">
              Core competencies essential for software development and competitive programming.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              { title: "C++", desc: "Strong foundation in object-oriented programming and system-level development.", icon: <Code2 size={24} /> },
              { title: "DSA", desc: "Proficient in complex algorithms and data structures for efficient problem-solving.", icon: <LineChart size={24} /> },
              { title: "Python", desc: "Versatile language used for scripting, data analysis, and machine learning applications.", icon: <TerminalSquare size={24} /> }
            ].map((lang, i) => (
              <motion.div
                key={lang.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative bg-[#364835]/40 border-t-[3px] border-neon-violet rounded-md p-8 pt-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-neon-violet rounded-full flex items-center justify-center text-white shadow-lg">
                  {lang.icon}
                </div>
                <h3 className="text-3xl font-light text-white mb-4">{lang.title}</h3>
                <p className="text-white/80 font-light leading-relaxed">{lang.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

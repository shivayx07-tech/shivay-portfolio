"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

const projects = [
  {
    title: "Intelligence Dashboard",
    description: "A high-performance Business Intelligence dashboard transforming raw data streams into real-time strategic insights.",
    tech: ["Power BI", "SQL", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "Algorithmic Trading Bot",
    description: "Optimized trading engine built with C++ leveraging advanced data structures to identify and execute market inefficiencies.",
    tech: ["C++", "DSA", "Data Modeling"],
    github: "#",
    live: "#",
  },
  {
    title: "Predictive Analytics Engine",
    description: "Machine learning pipeline analyzing historical trends to forecast future outcomes with high precision.",
    tech: ["Python", "Pandas", "Scikit-Learn"],
    github: "#",
    live: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm mix-blend-screen" />
      <div className="relative h-full flex flex-col p-8 glass-card rounded-2xl bg-[#030303] transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
        <p className="text-white/60 mb-8 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
          <a href={project.live} className="flex items-center gap-2 text-sm hover:text-neon-cyan transition-colors">
            <ExternalLink size={16} /> Live Demo
          </a>
          <a href={project.github} className="flex items-center gap-2 text-sm hover:text-white transition-colors text-white/50">
            <Code size={16} /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="projects" className="relative w-full py-32 bg-background overflow-hidden min-h-[800px]">
      <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-full opacity-20 mix-blend-screen pointer-events-none">
        <Image
          src="/projects_visual.png"
          alt="Abstract Architecture"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            <span className="text-neon-cyan mr-2">&gt;</span>System.deployments()
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

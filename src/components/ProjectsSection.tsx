import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Plane, BookOpen, Scale, X, Code2, Globe, ShieldAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: ShieldAlert,
    title: "Financial Intelligence Engine",
    emoji: "🛡️",
    desc: "Real-time, AI-driven fraud detection system designed to identify and prevent complex financial crimes like money laundering.",
    longDesc: "The Financial Intelligence Engine is a comprehensive fraud detection ecosystem. It goes beyond traditional rule-based systems by combining machine learning patterns, behavioral fingerprinting, and real-time visualization. It features blockchain-backed audit integrity to ensure all financial investigations are transparent and tamper-proof.",
    tags: ["AI", "ML", "FinTech", "Blockchain"],
  },
  {
    icon: Plane,
    title: "PackPilot",
    emoji: "✈️",
    desc: "AI-powered travel packing assistant that generates dynamic, weather-aware packing lists using real-time data and contextual intelligence.",
    longDesc: "PackPilot is a sophisticated travel companion that takes the guesswork out of packing. By integrating real-time weather APIs and user destination data, it generates personalized packing lists tailored to your specific trip. The system uses intelligent categorization to ensure you have everything from essential documents to climate-specific clothing.",
    tags: ["AI", "Python", "API Integration"],
  },
  {
    icon: BookOpen,
    title: "Syllabify",
    emoji: "📚",
    desc: "AI-powered study planner using NLP to convert syllabus PDFs into structured daily tasks with adaptive scheduling and a productivity dashboard.",
    longDesc: "Syllabify transforms static education documents into dynamic, actionable study plans. By leveraging Natural Language Processing, it extracts key topics from syllabi and generates a tailored schedule that adapts to the student's pace and deadlines, complete with a comprehensive progress dashboard.",
    tags: ["NLP", "Python", "Dashboard"],
  },
  {
    icon: Scale,
    title: "AI Legal Sentinel India",
    emoji: "⚖️",
    desc: "AI-based legal assistance system designed to simplify legal understanding and access through intelligent automation.",
    longDesc: "Legal Sentinel India aims to democratize legal information. Utilizing advanced AI models, it provides users with simplified explanations of legal statutes, case law assistance, and automated document review, making the complex Indian legal landscape more accessible to the general public.",
    tags: ["AI", "Legal Tech", "Automation"],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const { icon: Icon, title, emoji, desc, tags } = project;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 group hover-glow flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title} {emoji}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline self-start"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Details <ExternalLink size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-glass-border">
          {selectedProject && (
            <div className="space-y-8 py-4">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <selectedProject.icon size={24} className="text-primary" />
                  </div>
                  <DialogTitle className="text-2xl font-bold font-heading">
                    {selectedProject.title} {selectedProject.emoji}
                  </DialogTitle>
                </div>
                 <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                   {selectedProject.longDesc || selectedProject.desc}
                 </DialogDescription>
               </DialogHeader>
 
               <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-glass-border">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <Code2 size={16} className="text-primary" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <Globe size={16} className="text-primary" /> Project Links
                  </h4>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20">
                      <Code2 size={14} /> Repository
                    </Button>
                    <Button variant="default" size="sm" className="gap-2 shadow-lg shadow-primary/20">
                      <ExternalLink size={14} /> Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { Briefcase, Code, Cpu } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "CSE Student",
    period: "2026 – Present",
    desc: "Hands-on learning via projects in robotics, algorithms, and software systems.",
  },
  {
    icon: Code,
    title: "Competitive Programming",
    period: "2026 – Present",
    desc: "Active on platforms like GFG, improving DSA and problem-solving skills.",
  },
  {
    icon: Cpu,
    title: "Technical Projects & Learning",
    period: "2026 – Present",
    desc: "Exploring AI, system design, and real-world applications.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Journey</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          My <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {experiences.map(({ icon: Icon, title, period, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/10 border border-glass-border flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="glass-card p-5 hover-glow">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full">{period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block sticky top-32"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl blur-md opacity-40" />
            <img
              src="https://i.postimg.cc/1zj3YL3K/IMG-2961.jpg"
              alt="Shiva Yadav"
              className="relative w-56 h-64 object-cover rounded-2xl border-2 border-glass-border"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

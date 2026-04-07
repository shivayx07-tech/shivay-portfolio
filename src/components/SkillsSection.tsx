import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 80 },
      { name: "Data Modeling", level: 70 },
      { name: "Problem Solving", level: 90 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Power BI", level: 75 },
      { name: "Arduino", level: 70 },
      { name: "Git & GitHub", level: 80 },
      { name: "Embedded Systems", level: 65 },
    ],
  },
  {
    title: "Domains",
    skills: [
      { name: "Software Development", level: 85 },
      { name: "Business Intelligence", level: 75 },
      { name: "Data Analytics", level: 78 },
      { name: "AI & Robotics", level: 70 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-muted/20">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">My Skills</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 hover-glow"
          >
            <h3 className="font-heading font-semibold text-foreground mb-5">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, BookOpen } from "lucide-react";

const education = [
  { year: "2024 – 2028", title: "B.Tech in CSE", place: "Chhatrapati Shahu Ji Maharaj University, Kanpur" },
  { year: "2023 – 2024", title: "Class XII", place: "Nurture International School" },
  { year: "2021 – 2022", title: "Class X", place: "Nurture International School" },
];

const highlights = [
  { icon: Target, label: "Strong problem-solving mindset" },
  { icon: Lightbulb, label: "Real-world project experience" },
  { icon: BookOpen, label: "Continuous learning attitude" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Know Who <span className="gradient-text">I Am</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo + Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="relative w-fit mx-auto lg:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur-md opacity-40" />
            <img
              src="https://i.postimg.cc/sf0vNGvh/IMG-6771.jpg"
              alt="Shiva Yadav"
              className="relative w-72 h-80 object-cover rounded-2xl border-2 border-glass-border shadow-2xl shadow-primary/20 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Shiva Yadav is a passionate Computer Science and Engineering student focused on building intelligent and scalable solutions. With expertise in algorithms, robotics, and software development, he continuously improves through competitive coding and real-world projects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            His mission is to leverage technology for impactful and efficient solutions that push boundaries and create value.
          </p>

          <div className="grid gap-4 pt-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 glass-card p-4 hover-glow">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-heading font-semibold flex items-center gap-2">
            <GraduationCap size={22} className="text-primary" /> Education
          </h3>
          <div className="relative pl-6 border-l-2 border-border space-y-8">
            {education.map((edu) => (
              <div key={edu.title} className="relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                <p className="text-xs text-primary font-medium mb-1">{edu.year}</p>
                <h4 className="font-heading font-semibold text-foreground">{edu.title}</h4>
                <p className="text-sm text-muted-foreground">{edu.place}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

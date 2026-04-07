import { motion } from "framer-motion";
import { Globe, BarChart3, Palette, Code2, BrainCircuit } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Responsive, scalable, and high-performance websites with clean architecture." },
  { icon: BarChart3, title: "Data Analysis & Visualization", desc: "Transform raw data into insights using Python & Power BI dashboards." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, user-centered designs with modern aesthetics." },
  { icon: Code2, title: "Software Development", desc: "Efficient applications using C++ and Python with optimized logic." },
  { icon: BrainCircuit, title: "Business Intelligence", desc: "Data modeling and analytics to drive smart decision-making." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">What I Offer</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          My <span className="gradient-text">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 group hover-glow cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-all">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Trophy, Cpu, Lightbulb } from "lucide-react";

const stats = [
  { icon: Code2, value: 500, suffix: "+", label: "Problems Solved", color: "text-[hsl(var(--neon-cyan))]" },
  { icon: Trophy, value: 10, suffix: "+", label: "Projects Completed", color: "text-[hsl(var(--neon-purple))]" },
  { icon: Cpu, value: 15, suffix: "+", label: "Technologies Learned", color: "text-[hsl(var(--neon-cyan))]" },
  { icon: Lightbulb, value: 3, suffix: "+", label: "Domains Explored", color: "text-[hsl(var(--neon-purple))]" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-cyan)/0.05)] to-[hsl(var(--neon-purple)/0.05)]" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-[hsl(var(--neon-cyan)/0.3)] transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl md:text-4xl font-heading font-bold ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

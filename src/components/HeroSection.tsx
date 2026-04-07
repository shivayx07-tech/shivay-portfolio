import { motion } from "framer-motion";
import { ArrowDown, Eye, Mail, Download, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const profileImg = "https://i.postimg.cc/W1nbmRv8/92C3F01F-30CA-4562-B989-6298AC0EB9BF.jpg";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 5,
}));

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Hello! I'm{" "}
              <span className="gradient-text">Shiva Yadav</span>
            </h1>

            <p className="text-lg md:text-xl text-primary font-heading font-medium">
              Computer Science Engineer • Software Developer • Data & AI Enthusiast
            </p>

            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Building Intelligent, Scalable & Future-Ready Solutions. Transforming ideas into impactful technology through code, data, and innovation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 bg-black border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-all neon-glow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Cpu size={18} className="relative z-10 animate-pulse" />
                <span className="relative z-10 tracking-widest uppercase text-[10px]">Enter AI Dashboard</span>
              </Link>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity neon-glow"
              >
                <Eye size={18} /> View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg font-medium text-foreground hover-glow"
              >
                <Mail size={18} /> Contact Me
              </button>
              <a
                href="/Shiva_Yadav_Resume.pdf"
                download
                className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg font-medium text-foreground hover-glow border border-primary/30"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full blur-md opacity-60 animate-glow-pulse" />
              <img
                src={profileImg}
                alt="Shiva Yadav"
                width={320}
                height={320}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-glass-border"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">Scroll Down</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-3 border-t border-b border-border bg-muted/30 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-medium text-muted-foreground">
          {["WEB DEVELOPMENT", "APP DESIGN", "DATA ANALYTICS", "AI / ML", "BUSINESS INTELLIGENCE", "ROBOTICS", "SOFTWARE DEVELOPMENT", "WEB DEVELOPMENT", "APP DESIGN", "DATA ANALYTICS", "AI / ML", "BUSINESS INTELLIGENCE", "ROBOTICS", "SOFTWARE DEVELOPMENT"].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

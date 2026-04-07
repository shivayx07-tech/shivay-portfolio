import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const SERVICE_ID = "service_aaxk33f";
const TEMPLATE_ID = "template_qaton2m";
const PUBLIC_KEY = "Jbl-UBpkpPoDKD7FS";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:shivayx07@gmail.com", text: "shivayx07@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shivayx07", text: "linkedin.com/in/shivayx07" },
  { icon: Github, label: "GitHub", href: "https://github.com/shivayx07-tech", text: "github.com/shivayx07-tech" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity neon-glow w-full justify-center disabled:opacity-50"
            >
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a nice project? Reach out and let's chat. I'm always open to discussing new opportunities and ideas.
            </p>

            {/* Photo */}
            <div className="relative w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-2xl blur-md opacity-30" />
              <img
                src="https://i.postimg.cc/VNr855zD/IMG-2517.jpg"
                alt="Shiva Yadav"
                className="relative w-full max-w-[240px] h-48 object-cover rounded-2xl border-2 border-glass-border"
              />
            </div>

            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, href, text }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 hover-glow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm text-foreground font-medium">{text}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

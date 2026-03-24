import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, Download, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/johnvictorchavala/chinnu", label: "GitHub", color: "hover:border-violet hover:glow-violet" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/john-victor-chavala/", label: "LinkedIn", color: "hover:border-cyan hover:glow-cyan" },
  { icon: Mail, href: "mailto:johnvictorchavala95@gmail.com", label: "Email", color: "hover:border-pink hover:glow-pink" },
  { icon: Phone, href: "tel:+918309240212", label: "Phone", color: "hover:border-orange hover:glow-orange" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-violet/20 blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-pink/15 blur-[120px] animate-blob-delay" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-cyan/15 blur-[100px] animate-blob-delay-2" />

      {/* Decorative grid */}
      <div className="absolute inset-0 decorative-dots opacity-30" />

      {/* Decorative rings */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-violet/10 animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full border border-pink/10 animate-spin-slow hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-vibrant mb-8"
        >
          <Sparkles className="w-4 h-4 text-violet" />
          <span className="font-mono text-sm text-violet tracking-wide">Machine Learning Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tight mb-6 leading-[0.9]"
        >
          <span className="text-foreground">John Victor</span>
          <br />
          <span className="text-gradient-rainbow">Chavala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems with <span className="text-cyan font-medium">deep learning</span>,{" "}
          <span className="text-pink font-medium">computer vision</span>, and{" "}
          <span className="text-orange font-medium">geospatial analytics</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-rainbow text-background font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            View My Work <Sparkles className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-border hover:border-violet text-foreground font-semibold text-sm hover:glow-violet transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 group ${color}`}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

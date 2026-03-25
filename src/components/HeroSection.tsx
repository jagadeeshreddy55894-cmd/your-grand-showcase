import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown, Zap, Target, Brain, Users } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const traits = [
  { icon: Zap, title: "Fast Learner", subtitle: "Adapts quickly", color: "text-cyan" },
  { icon: Target, title: "Detail Oriented", subtitle: "Precision-driven", color: "text-pink" },
  { icon: Brain, title: "Problem Solver", subtitle: "Elegant solutions", color: "text-violet" },
  { icon: Users, title: "Team Player", subtitle: "Collaborative", color: "text-lime" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle field */}
      <div className="particle-field">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Background blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet/8 blur-[150px] animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan/6 blur-[120px] animate-blob-delay" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-pink/6 blur-[100px] animate-blob-delay-2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 decorative-grid opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/40 bg-emerald/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-emerald text-sm font-semibold tracking-wide">Open to Opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm text-violet uppercase tracking-[0.25em] mb-4 font-semibold"
            >
              Machine Learning Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.95] mb-6"
            >
              <span className="text-foreground">John Victor</span>
              <br />
              <span className="text-gradient-gold">Chavala</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="w-12 h-0.5 bg-muted-foreground/30 mt-3 shrink-0" />
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Building intelligent systems with <span className="text-cyan font-medium">Machine Learning</span> —
                turning raw data into real-world impact through <span className="text-pink font-medium">predictive models</span> and{" "}
                <span className="text-violet font-medium">smart automation</span>.
              </p>
            </motion.div>

            {/* Trait cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
            >
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="trait-card"
                >
                  <div className="dot top-0 left-0" style={{ top: -4, left: -4 }} />
                  <div className="dot top-0 right-0" style={{ top: -4, right: -4 }} />
                  <div className="dot bottom-0 left-0" style={{ bottom: -4, left: -4 }} />
                  <div className="dot bottom-0 right-0" style={{ bottom: -4, right: -4 }} />
                  <trait.icon className={`w-6 h-6 ${trait.color} mx-auto mb-2`} />
                  <p className="font-display font-bold text-sm">{trait.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{trait.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs + Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-background font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet/40 text-violet font-bold text-sm hover:bg-violet/10 transition-all"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a
                href="https://github.com/johnvictorchavala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-violet/40 hover:bg-violet/5 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/john-victor-chavala/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-cyan/40 hover:bg-cyan/5 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right: Decorative avatar ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative shrink-0 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-violet/30 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-cyan/20" style={{ animation: 'spin-slow 25s linear infinite reverse' }} />
              <div className="absolute inset-6 rounded-full border border-pink/15 animate-spin-slow" style={{ animationDuration: '30s' }} />

              {/* Gradient ring */}
              <div
                className="absolute inset-0 rounded-full animate-gradient-shift"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--violet)), hsl(var(--cyan)), hsl(var(--pink)), hsl(var(--lime)), hsl(var(--violet)))',
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))',
                  WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))',
                }}
              />

              {/* Inner circle with initials */}
              <div className="absolute inset-8 rounded-full bg-card flex items-center justify-center">
                <span className="text-6xl font-display font-black text-gradient-gold">JV</span>
              </div>

              {/* Orbiting dots */}
              <div className="absolute -top-1 left-1/2 w-3 h-3 rounded-full bg-violet animate-pulse-glow" />
              <div className="absolute bottom-4 -right-1 w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <div className="absolute bottom-0 left-8 w-2.5 h-2.5 rounded-full bg-pink animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-16 gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

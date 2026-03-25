import { motion } from "framer-motion";
import { Sparkles, Code2, FlaskConical, Eye } from "lucide-react";
const highlights = [
  { icon: Code2, label: "Python & Scikit-learn", color: "text-cyan" },
  { icon: FlaskConical, label: "Feature Engineering", color: "text-pink" },
  { icon: Eye, label: "Computer Vision", color: "text-violet" },
  { icon: Sparkles, label: "Predictive Modeling", color: "text-lime" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-violet/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-gold">About Me</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-2xl animate-gradient-shift opacity-70"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--violet)), hsl(var(--cyan)), hsl(var(--pink)), hsl(var(--lime)), hsl(var(--violet)))',
                  filter: 'blur(30px)',
                }}
              />
              <div className="relative w-full h-full rounded-2xl border border-border/50 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(var(--violet) / 0.15), hsl(var(--card)), hsl(var(--cyan) / 0.1))' }}>
                <div className="absolute inset-0 decorative-dots opacity-30" />
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-background" />
                  </div>
                  <span className="font-display font-black text-3xl text-gradient-gold">ML</span>
                  <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">Enthusiast</span>
                </div>
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan/20 animate-pulse" />
                <div className="absolute bottom-6 left-4 w-6 h-6 rounded-full bg-pink/20 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-lime/20 animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Machine Learning enthusiast and Computer Science student at{" "}
              <span className="text-foreground font-semibold">Lovely Professional University</span> with
              hands-on experience in building intelligent data-driven solutions. Skilled in{" "}
              <span className="text-cyan font-medium">Python</span>,{" "}
              <span className="text-pink font-medium">Scikit-learn</span>, and{" "}
              <span className="text-violet font-medium">data analysis</span>, with strong knowledge of
              feature engineering and predictive modeling. Passionate about applying{" "}
              <span className="text-lime font-medium">AI and computer vision</span> techniques to solve
              real-world problems like environmental monitoring and emotion detection.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-violet/40 transition-all"
                >
                  <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
                  <p className="text-xs font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

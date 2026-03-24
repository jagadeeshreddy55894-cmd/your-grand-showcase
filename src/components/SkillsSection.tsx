import { motion } from "framer-motion";

const techIcons = [
  "C", "C++", "Java", "Python", "HTML", "CSS",
  "TensorFlow", "Scikit-learn", "XGBoost", "NumPy", "Pandas",
  "VS Code", "Google Colab", "IntelliJ IDEA",
];

const skillPills = [
  { name: "Python", emoji: "🐍", color: "border-cyan/30 hover:border-cyan/60 hover:bg-cyan/10" },
  { name: "Java", emoji: "☕", color: "border-orange/30 hover:border-orange/60 hover:bg-orange/10" },
  { name: "C / C++", emoji: "⚡", color: "border-violet/30 hover:border-violet/60 hover:bg-violet/10" },
  { name: "TensorFlow", emoji: "🧠", color: "border-pink/30 hover:border-pink/60 hover:bg-pink/10" },
  { name: "Scikit-learn", emoji: "📊", color: "border-cyan/30 hover:border-cyan/60 hover:bg-cyan/10" },
  { name: "XGBoost", emoji: "🚀", color: "border-lime/30 hover:border-lime/60 hover:bg-lime/10" },
  { name: "NumPy", emoji: "🔢", color: "border-violet/30 hover:border-violet/60 hover:bg-violet/10" },
  { name: "Pandas", emoji: "🐼", color: "border-lime/30 hover:border-lime/60 hover:bg-lime/10" },
  { name: "HTML / CSS", emoji: "🌐", color: "border-orange/30 hover:border-orange/60 hover:bg-orange/10" },
  { name: "VS Code", emoji: "💻", color: "border-cyan/30 hover:border-cyan/60 hover:bg-cyan/10" },
  { name: "Google Colab", emoji: "☁️", color: "border-pink/30 hover:border-pink/60 hover:bg-pink/10" },
  { name: "IntelliJ IDEA", emoji: "🔧", color: "border-violet/30 hover:border-violet/60 hover:bg-violet/10" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet/10 text-violet font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-gold">Skills & Tools</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Marquee */}
        <div className="relative mb-16 overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee-track">
            {[...techIcons, ...techIcons].map((icon, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-6 py-3 mx-2 rounded-full glass-card text-muted-foreground font-mono text-sm whitespace-nowrap hover:text-foreground hover:border-violet/40 transition-all"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {skillPills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border ${skill.color} transition-all duration-300 cursor-default`}
            >
              <span className="text-lg">{skill.emoji}</span>
              <span className="font-medium text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

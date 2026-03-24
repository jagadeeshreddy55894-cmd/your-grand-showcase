import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    emoji: "💻",
    skills: ["C", "C++", "Java", "Python"],
    gradient: "from-pink to-orange",
    glow: "group-hover:glow-pink",
  },
  {
    title: "ML / AI Frameworks",
    emoji: "🧠",
    skills: ["TensorFlow", "Scikit-learn", "XGBoost", "NumPy", "Pandas"],
    gradient: "from-violet to-cyan",
    glow: "group-hover:glow-violet",
  },
  {
    title: "Web Technologies",
    emoji: "🌐",
    skills: ["HTML", "CSS"],
    gradient: "from-cyan to-lime",
    glow: "group-hover:glow-cyan",
  },
  {
    title: "Tools & Platforms",
    emoji: "⚡",
    skills: ["VS Code", "Google Colab", "IntelliJ IDEA"],
    gradient: "from-orange to-pink",
    glow: "group-hover:glow-orange",
  },
];

const softSkills = ["Problem-Solving", "Team Player", "Adaptability"];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Decorative */}
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
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-cool">Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group glass-vibrant rounded-2xl p-6 hover:border-violet/30 transition-all duration-500 ${category.glow}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.emoji}</span>
                <div className={`h-0.5 flex-1 bg-gradient-to-r ${category.gradient} opacity-30 rounded-full`} />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary/80 text-sm text-foreground font-medium hover:bg-secondary transition-colors border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-muted-foreground text-sm font-mono mr-2">Soft Skills →</span>
          {softSkills.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full border border-pink/20 text-pink text-sm font-medium hover:bg-pink/10 transition-colors">
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

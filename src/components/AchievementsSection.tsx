import { motion } from "framer-motion";
import { Trophy, Heart, Code2, Award, ArrowUpRight, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Top 5 🏆",
    description: "4th position in a 32-hour institutional hackathon, building a creative and innovative website as a team.",
    bg: "bg-orange/10",
    textColor: "text-orange",
    glowClass: "hover:glow-orange",
  },
  {
    icon: Heart,
    title: "50+ Volunteer Hours 💛",
    description: "Dedicated time supporting elders at an old age home in collaboration with an NGO, providing companionship.",
    bg: "bg-pink/10",
    textColor: "text-pink",
    glowClass: "hover:glow-pink",
  },
  {
    icon: Code2,
    title: "50+ LeetCode 🔥",
    description: "Solved DSA problems on LeetCode, strengthening problem-solving and logical thinking skills.",
    bg: "bg-lime/10",
    textColor: "text-lime",
    glowClass: "hover:glow-cyan",
    link: "https://leetcode.com/",
    linkText: "View Profile",
  },
];

const certificates = [
  { name: "Industrial Training in ML", org: "Bharat Skillz", date: "Aug 2025", color: "orange", link: "#" },
  { name: "Cloud Computing", org: "NPTEL", date: "Apr 2025", color: "cyan", link: "#" },
  { name: "Java Programming", org: "Neo Platform", date: "May 2024", color: "pink", link: "#" },
  { name: "HTML & CSS", org: "freeCodeCamp", date: "Oct 2023", color: "lime", link: "https://www.freecodecamp.org/certification/" },
];

const certColorMap: Record<string, { iconBg: string; iconText: string; linkColor: string }> = {
  orange: { iconBg: "bg-orange/10", iconText: "text-orange", linkColor: "text-orange hover:bg-orange/10" },
  cyan: { iconBg: "bg-cyan/10", iconText: "text-cyan", linkColor: "text-cyan hover:bg-cyan/10" },
  pink: { iconBg: "bg-pink/10", iconText: "text-pink", linkColor: "text-pink hover:bg-pink/10" },
  lime: { iconBg: "bg-lime/10", iconText: "text-lime", linkColor: "text-lime hover:bg-lime/10" },
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 decorative-grid opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-orange/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-warm">Achievements</h2>
          <div className="w-16 h-1 bg-gradient-warm mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-vibrant rounded-2xl p-6 text-center group transition-all duration-500 ${item.glowClass}`}
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`w-7 h-7 ${item.textColor}`} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${item.textColor} hover:underline`}
                >
                  {item.linkText} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet/10 text-violet font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Verified
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-black text-gradient-cool">Certifications</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, i) => {
            const c = certColorMap[cert.color];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-vibrant rounded-xl p-5 flex items-center gap-4 group transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center shrink-0`}>
                  <Award className={`w-5 h-5 ${c.iconText}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display font-semibold text-sm truncate">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.org} · {cert.date}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-xs font-semibold ${c.linkColor} transition-all shrink-0`}
                >
                  View Certificate <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

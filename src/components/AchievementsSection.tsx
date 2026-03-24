import { motion } from "framer-motion";
import { Trophy, Heart, Code2, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Top 5",
    description: "4th position in a 32-hour institutional hackathon, building a creative and innovative website as a team.",
  },
  {
    icon: Heart,
    title: "50+ Volunteer Hours",
    description: "Dedicated time supporting elders at an old age home in collaboration with an NGO, providing companionship and daily assistance.",
  },
  {
    icon: Code2,
    title: "50+ LeetCode Problems",
    description: "Solved DSA problems on LeetCode, strengthening problem-solving and logical thinking skills.",
  },
];

const certificates = [
  { name: "Industrial Training in ML", org: "Bharat Skillz", date: "Aug 2025" },
  { name: "Cloud Computing", org: "NPTEL", date: "Apr 2025" },
  { name: "Java Programming", org: "Neo Platform", date: "May 2024" },
  { name: "HTML & CSS", org: "freeCodeCamp", date: "Oct 2023" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold">Achievements & Certifications</h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-mono text-primary text-xs tracking-[0.15em] uppercase mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 glass rounded-lg p-4"
              >
                <Award className="w-5 h-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.org} · {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

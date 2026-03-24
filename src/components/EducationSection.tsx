import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Sparkles } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech — Computer Science & Engineering",
    detail: "CGPA: 7.1",
    period: "Aug 2023 — Present",
    color: "violet",
    emoji: "🎓",
  },
  {
    school: "Sri Chaitanya Junior College",
    location: "Eluru, Andhra Pradesh",
    degree: "Intermediate",
    detail: "92%",
    period: "Jul 2021 — Apr 2023",
    color: "cyan",
    emoji: "📚",
  },
  {
    school: "Sri Chaitanya Techno School",
    location: "Chintalpudi, Andhra Pradesh",
    degree: "Matriculation",
    detail: "99%",
    period: "Jul 2020 — Mar 2021",
    color: "pink",
    emoji: "🏫",
  },
];

const colorMap: Record<string, { dot: string; icon: string; badge: string; line: string; glow: string }> = {
  violet: { dot: "bg-violet", icon: "text-violet", badge: "bg-violet/15 text-violet border border-violet/20", line: "from-violet/60", glow: "hover:glow-violet" },
  cyan: { dot: "bg-cyan", icon: "text-cyan", badge: "bg-cyan/15 text-cyan border border-cyan/20", line: "from-cyan/60", glow: "hover:glow-cyan" },
  pink: { dot: "bg-pink", icon: "text-pink", badge: "bg-pink/15 text-pink border border-pink/20", line: "from-pink/60", glow: "hover:glow-pink" },
};

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full bg-violet/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan/5 blur-[100px]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Background
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-cool">Education</h2>
          <div className="w-16 h-1 bg-gradient-electric mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline layout */}
        <div className="relative pl-12 md:pl-16">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet/40 via-cyan/30 to-pink/40" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const c = colorMap[edu.color];
              return (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-12 md:-left-16 top-6 w-5 h-5 rounded-full ${c.dot} border-4 border-background z-10 shadow-lg`} style={{ left: '-7px', marginLeft: '-1.25rem' }}>
                    <div className={`absolute inset-0 rounded-full ${c.dot} animate-ping opacity-20`} />
                  </div>

                  {/* Card */}
                  <div className={`glass-vibrant rounded-2xl p-6 md:p-8 group transition-all duration-500 ${c.glow} hover:-translate-y-1`}>
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{edu.emoji}</span>
                        <div>
                          <h3 className="font-display font-bold text-lg leading-tight">{edu.school}</h3>
                          <div className="flex items-center gap-1.5 mt-1 text-muted-foreground text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono whitespace-nowrap px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>

                    {/* Degree + score */}
                    <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                      <GraduationCap className={`w-5 h-5 ${c.icon} shrink-0`} />
                      <span className="text-foreground font-medium">{edu.degree}</span>
                      <span className={`px-4 py-1.5 rounded-full font-mono text-sm font-bold ${c.badge}`}>
                        <Sparkles className="w-3 h-3 inline mr-1" />{edu.detail}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

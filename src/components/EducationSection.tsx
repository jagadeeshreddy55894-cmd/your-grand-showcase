import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech — Computer Science & Engineering",
    detail: "CGPA: 7.1",
    period: "Aug 2023 — Present",
    color: "violet",
    dotColor: "bg-violet",
    borderColor: "border-l-violet",
  },
  {
    school: "Sri Chaitanya Junior College",
    location: "Eluru, Andhra Pradesh",
    degree: "Intermediate",
    detail: "92%",
    period: "Jul 2021 — Apr 2023",
    color: "cyan",
    dotColor: "bg-cyan",
    borderColor: "border-l-cyan",
  },
  {
    school: "Sri Chaitanya Techno School",
    location: "Chintalpudi, Andhra Pradesh",
    degree: "Matriculation",
    detail: "99%",
    period: "Jul 2020 — Mar 2021",
    color: "pink",
    dotColor: "bg-pink",
    borderColor: "border-l-pink",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full bg-cyan/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Background
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-lime">Education</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass-vibrant rounded-2xl p-6 border-l-4 ${edu.borderColor}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display font-bold text-lg">{edu.school}</h3>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <GraduationCap className={`w-5 h-5 text-${edu.color} shrink-0`} />
                <span className="text-foreground font-medium">{edu.degree}</span>
                <span className={`px-3 py-1 rounded-full bg-${edu.color}/10 text-${edu.color} font-mono text-sm font-bold`}>{edu.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

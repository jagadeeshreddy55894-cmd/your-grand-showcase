import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech — Computer Science & Engineering",
    detail: "CGPA: 7.1",
    period: "Aug 2023 — Present",
  },
  {
    school: "Sri Chaitanya Junior College",
    location: "Eluru, Andhra Pradesh",
    degree: "Intermediate",
    detail: "92%",
    period: "Jul 2021 — Apr 2023",
  },
  {
    school: "Sri Chaitanya Techno School",
    location: "Chintalpudi, Andhra Pradesh",
    degree: "Matriculation",
    detail: "99%",
    period: "Jul 2020 — Mar 2021",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-3 w-5 h-5 rounded-full bg-background border-2 border-primary hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-primary shrink-0 md:hidden" />
                      <h3 className="font-semibold text-lg">{edu.school}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{edu.location}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-foreground font-medium">{edu.degree}</span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-sm font-semibold">{edu.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Heart, Sparkles } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "johnvictorchavala95@gmail.com", href: "mailto:johnvictorchavala95@gmail.com", color: "orange", bg: "bg-orange/10", text: "text-orange", glow: "hover:glow-orange" },
  { icon: Phone, label: "Phone", value: "+91 8309240212", href: "tel:+918309240212", color: "pink", bg: "bg-pink/10", text: "text-pink", glow: "hover:glow-pink" },
  { icon: Github, label: "GitHub", value: "johnvictorchavala", href: "https://github.com/johnvictorchavala/chinnu", color: "violet", bg: "bg-violet/10", text: "text-violet", glow: "hover:glow-violet" },
  { icon: Linkedin, label: "LinkedIn", value: "john-victor-chavala", href: "https://www.linkedin.com/in/john-victor-chavala/", color: "cyan", bg: "bg-cyan/10", text: "text-cyan", glow: "hover:glow-cyan" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-orange/8 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink/5 blur-[120px]" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Say Hello 👋
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            <span className="text-gradient-gold">Let's Build</span>{" "}
            <span className="text-foreground">Something</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open to collaborations, internships, and ML/AI projects. Let's connect! 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-vibrant rounded-2xl p-5 flex items-center gap-4 group transition-all duration-500 ${link.glow}`}
            >
              <div className={`w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center shrink-0`}>
                <link.icon className={`w-5 h-5 ${link.text}`} />
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className={`text-xs font-mono ${link.text} uppercase tracking-wider`}>{link.label}</p>
                <p className="font-medium text-sm truncate">{link.value}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-pink fill-pink" /> by John Victor Chavala
          <Sparkles className="w-4 h-4 text-orange" />
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "johnvictorchavala95@gmail.com", href: "mailto:johnvictorchavala95@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8309240212", href: "tel:+918309240212" },
  { icon: Github, label: "GitHub", value: "johnvictorchavala", href: "https://github.com/johnvictorchavala/chinnu" },
  { icon: Linkedin, label: "LinkedIn", value: "john-victor-chavala", href: "https://www.linkedin.com/in/john-victor-chavala/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open to collaborations, internships, and ML/AI projects. Reach out anytime.
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
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-5 flex items-center gap-4 group hover:glow-border transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{link.label}</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{link.value}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-mono">
          © 2025 John Victor Chavala. Crafted with purpose.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

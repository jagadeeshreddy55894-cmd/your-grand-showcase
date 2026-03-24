import { motion } from "framer-motion";
import { ExternalLink, Brain, MapPin, Sprout, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Face Expression Detection",
    subtitle: "Unsupervised Clustering · Dec 2025",
    description: "Deep learning pipeline leveraging CNN embeddings, K-Means, DBSCAN, PCA, and t-SNE for emotion grouping without supervision. Optimized for live camera and edge deployment.",
    tags: ["CNN", "K-Means", "DBSCAN", "PCA", "t-SNE"],
    link: "https://github.com/johnvictorchavala/chinnu",
    color: "violet",
    borderColor: "hover:border-violet/40",
    glowClass: "hover:glow-violet",
    tagBg: "bg-violet/10 text-violet",
    iconBg: "bg-violet/10",
    iconColor: "text-violet",
  },
  {
    icon: MapPin,
    title: "Riverbank Erosion Detection",
    subtitle: "Geospatial Analysis · May 2025",
    description: "Automated system detecting and quantifying riverbank erosion from aerial imagery using XGBoost, Random Forest, Gradient Boosting, SVR, Ridge, and Lasso regression.",
    tags: ["XGBoost", "Random Forest", "Geospatial", "SVR"],
    link: "https://github.com/johnvictorchavala/chinnu",
    color: "cyan",
    borderColor: "hover:border-cyan/40",
    glowClass: "hover:glow-cyan",
    tagBg: "bg-cyan/10 text-cyan",
    iconBg: "bg-cyan/10",
    iconColor: "text-cyan",
  },
  {
    icon: Sprout,
    title: "Crop Recommendation System",
    subtitle: "Supervised Learning · Nov 2024",
    description: "Data-driven agricultural system achieving 92% prediction accuracy using soil nutrients, temperature, humidity, and rainfall with Logistic Regression, Random Forest, and SVM.",
    tags: ["Scikit-Learn", "Random Forest", "SVM", "Pandas"],
    link: "https://github.com/johnvictorchavala/chinnu",
    color: "lime",
    borderColor: "hover:border-lime/40",
    glowClass: "hover:glow-cyan",
    tagBg: "bg-lime/10 text-lime",
    iconBg: "bg-lime/10",
    iconColor: "text-lime",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 decorative-grid" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-pink/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-violet/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink/10 text-pink font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-gradient-warm">Featured Projects</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass-vibrant rounded-2xl p-8 group transition-all duration-500 ${project.borderColor} ${project.glowClass}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-14 h-14 rounded-xl ${project.iconBg} flex items-center justify-center shrink-0`}>
                  <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-display font-bold group-hover:text-foreground transition-colors">{project.title}</h3>
                      <p className="font-mono text-xs text-muted-foreground tracking-wide mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${project.tagBg}`}>{tag}</span>
                    ))}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border text-sm font-semibold hover:border-${project.color}/40 transition-all duration-300 group/link`}
                    >
                      View Project <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { ExternalLink, Brain, MapPin, Sprout } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Face Expression Detection",
    subtitle: "Unsupervised Clustering · Dec 2025",
    description: "Deep learning pipeline leveraging CNN embeddings, K-Means, DBSCAN, PCA, and t-SNE for emotion grouping without supervision. Optimized for live camera and edge deployment.",
    tags: ["CNN", "K-Means", "DBSCAN", "PCA", "t-SNE"],
    link: "https://github.com/johnvictorchavala/chinnu",
  },
  {
    icon: MapPin,
    title: "Riverbank Erosion Detection",
    subtitle: "Geospatial Analysis · May 2025",
    description: "Automated system detecting and quantifying riverbank erosion from aerial imagery using XGBoost, Random Forest, Gradient Boosting, SVR, Ridge, and Lasso regression.",
    tags: ["XGBoost", "Random Forest", "Geospatial", "SVR"],
    link: "https://github.com/johnvictorchavala/chinnu",
  },
  {
    icon: Sprout,
    title: "Crop Recommendation System",
    subtitle: "Supervised Learning · Nov 2024",
    description: "Data-driven agricultural system achieving 92% prediction accuracy using soil nutrients, temperature, humidity, and rainfall as features with Logistic Regression, Random Forest, and SVM.",
    tags: ["Scikit-Learn", "Random Forest", "SVM", "Pandas"],
    link: "https://github.com/johnvictorchavala/chinnu",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="block glass rounded-xl p-8 group hover:glow-border transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="font-mono text-xs text-muted-foreground tracking-wide mt-1">{project.subtitle}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-primary/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

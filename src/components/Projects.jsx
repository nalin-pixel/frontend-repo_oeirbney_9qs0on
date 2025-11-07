import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Secure API Boilerplate',
    description: 'Production-ready FastAPI template with JWT auth, rate limiting, and observability.',
    tech: ['FastAPI', 'PostgreSQL', 'Docker', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Kubernetes DevOps Toolkit',
    description: 'Helm charts and GitHub Actions for automated deployments and blue‑green releases.',
    tech: ['K8s', 'Helm', 'GitHub Actions', 'ArgoCD'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Threat Intel Dashboard',
    description: 'Streamlit dashboard that aggregates CVEs, feeds, and alerts for quick triage.',
    tech: ['Python', 'Streamlit', 'Redis'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Infra as Code Starter',
    description: 'Terraform modules for secure VPCs, EKS clusters, and managed databases.',
    tech: ['Terraform', 'AWS', 'EKS'],
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-900 dark:text-neutral-100 hover:underline">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-900 dark:text-neutral-100 hover:underline">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

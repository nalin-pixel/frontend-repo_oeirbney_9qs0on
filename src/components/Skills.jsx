import { motion } from 'framer-motion';
import { Code, Shield, Server, Terminal, Cloud, Lock, Database, GitBranch, Box } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code },
  { name: 'FastAPI', icon: Server },
  { name: 'Docker', icon: Box },
  { name: 'Kubernetes', icon: Cloud },
  { name: 'Terraform', icon: Box },
  { name: 'Linux', icon: Terminal },
  { name: 'CI/CD', icon: GitBranch },
  { name: 'Security', icon: Shield },
  { name: 'IAM', icon: Lock },
  { name: 'Databases', icon: Database },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 rounded-lg border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3"
            >
              <Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

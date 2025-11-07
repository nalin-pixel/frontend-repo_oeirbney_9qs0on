import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          I’m Collins Boit, a software developer who loves building systems that are fast, reliable, and secure. My path began with Python scripting, grew through cloud and DevOps practices, and sharpened with cybersecurity principles. Today, I focus on backend engineering, CI/CD automation, and security-first design.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          When I’m not refining pipelines or hardening services, you’ll find me exploring threat models, contributing to open-source, and learning new ways to make software resilient.
        </motion.p>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero({ onHireClick }) {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/95 dark:from-black/80 dark:via-black/60 dark:to-black/95" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white shadow">
            Python • DevOps • Cybersecurity
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Collins Boit
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/90">
            Software Developer crafting reliable backends, automated infrastructure, and secure systems.
          </p>
          <p className="mt-3 text-sm md:text-base text-white/80">
            I turn complex problems into elegant, scalable solutions with a focus on performance and security.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onHireClick}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-6 py-3 font-medium shadow-lg backdrop-blur hover:bg-white"
            >
              Hire Me <ArrowRight className="h-4 w-4" />
            </motion.button>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

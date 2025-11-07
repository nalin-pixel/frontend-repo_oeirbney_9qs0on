import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks ${name}! I will get back to you shortly.`);
    e.currentTarget.reset();
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 font-medium transition">Send</button>
              {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
            </div>
          </form>

          <div className="flex flex-col justify-center gap-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              I’m open to full-time roles, freelance projects, and collaborations. Reach out and let’s build something great.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline"><Github className="h-5 w-5" /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline"><Linkedin className="h-5 w-5" /> LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline"><Twitter className="h-5 w-5" /> X</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

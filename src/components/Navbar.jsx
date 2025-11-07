import { useEffect, useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      const isDark = stored === 'dark';
      setDark(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Collins Boit</a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200/60 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-3 text-sm text-neutral-800 dark:text-neutral-200">
            <a href="#about" onClick={() => setOpen(false)} className="hover:underline">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:underline">Projects</a>
            <a href="#skills" onClick={() => setOpen(false)} className="hover:underline">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:underline">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

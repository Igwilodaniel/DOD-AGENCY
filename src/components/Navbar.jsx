import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../utils/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/60 dark:bg-black/60 light:bg-white/80 border-b border-white/10 dark:border-white/10 light:border-zinc-200"
            : ""
        }`}
      >
        <a
          href="/"
          className="text-xl font-bold tracking-tighter uppercase text-white dark:text-white light:text-zinc-900"
        >
          DOD
          <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400">
            .
          </span>
          Agency
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white dark:text-white light:text-zinc-700 hover:text-zinc-400 dark:hover:text-zinc-400 light:hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-white/20 dark:border-white/20 light:border-zinc-300 flex items-center justify-center hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-300 text-white dark:text-white light:text-zinc-900"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-white/20 dark:border-white/20 light:border-zinc-300 flex items-center justify-center hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-300 text-white dark:text-white light:text-zinc-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Start a Project CTA (Desktop) */}
          <a
            href="/contact"
            className="hidden md:block text-sm uppercase tracking-widest border border-white/20 dark:border-white/20 light:border-zinc-300 px-6 py-2 rounded-full hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-500 text-white dark:text-white light:text-zinc-900"
          >
            Start a Project
          </a>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/98 dark:bg-black/98 light:bg-white/98 backdrop-blur-xl z-40 md:hidden"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter uppercase text-white dark:text-white light:text-zinc-900 hover:text-zinc-400 dark:hover:text-zinc-400 light:hover:text-zinc-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 text-sm uppercase tracking-widest border border-white/20 dark:border-white/20 light:border-zinc-300 px-8 py-3 rounded-full hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-500 text-white dark:text-white light:text-zinc-900"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

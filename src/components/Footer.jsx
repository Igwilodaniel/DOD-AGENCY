import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Footer({ nextProject }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 pt-24 pb-12 px-6 overflow-hidden">
      {/* Retention Loop: Next Project */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="group cursor-pointer" onClick={scrollToTop}>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 dark:text-zinc-600 light:text-zinc-400 block mb-4">
            Up Next
          </span>
          <div className="flex items-end justify-between border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-12 overflow-hidden">
            <h3 className="text-6xl md:text-9xl font-bold tracking-tighter text-white dark:text-white light:text-zinc-900 transition-all duration-700 group-hover:translate-x-12">
              {nextProject.title}
            </h3>
            <div className="hidden md:block transition-all duration-700 group-hover:-translate-x-12">
              <ArrowRight
                size={80}
                strokeWidth={1}
                className="text-zinc-700 dark:text-zinc-700 light:text-zinc-300 group-hover:text-white dark:group-hover:text-white light:group-hover:text-zinc-900 transition-colors"
              />
            </div>
          </div>

          {/* Peek at the next project background on hover */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
            <img
              src={nextProject.image}
              className="w-full h-full object-cover scale-150 blur-3xl"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-600 dark:text-zinc-600 light:text-zinc-400 text-[10px] uppercase tracking-[0.3em] font-bold">
        <div className="mb-8 md:mb-0">
          © 2026 DOD Web Agency // Built for High Performance
        </div>
        <div className="flex space-x-12">
          <a
            href="#"
            className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
          >
            Behance
          </a>
          <a
            href="#"
            className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}

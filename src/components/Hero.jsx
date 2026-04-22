import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/10 light:bg-teal-500/5 rounded-full blur-[120px] blob-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-500/5 rounded-full blur-[120px] blob-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mb-6 block font-semibold">
          Award Winning Web Agency
        </span>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 text-white dark:text-white light:text-zinc-900">
          CRAFTING DIGITAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700 dark:from-white dark:via-zinc-400 dark:to-zinc-700 light:from-zinc-900 light:via-zinc-600 light:to-zinc-400">
            NARRATIVES.
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-lg md:text-xl font-light leading-relaxed">
          We build high-performance, cinematic web experiences that bridge the
          gap between human emotion and digital precision.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center space-y-4 cursor-pointer group"
        onClick={scrollToProjects}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-600 light:text-zinc-400">
          Scroll to Explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent dark:from-white dark:to-transparent light:from-zinc-900 light:to-transparent group-hover:h-16 transition-all duration-500" />
      </motion.div>

      <style jsx global>{`
        @keyframes blob-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .blob-pulse {
          animation: blob-pulse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

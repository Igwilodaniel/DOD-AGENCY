import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 dark:border-white/20 light:border-zinc-300 flex items-center justify-center hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-300 z-10"
              >
                <X size={20} />
              </button>

              {/* Hero Image */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-400 uppercase mb-2 block">
                    {project.id} // {project.category}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* S.T.A.R. Breakdown */}
              <div className="p-8 md:p-12 space-y-12">
                {/* Situation */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: project.accent + "20",
                        color: project.accent,
                      }}
                    >
                      S
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                      Situation
                    </h3>
                  </div>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed pl-16">
                    {project.problem}
                  </p>
                </div>

                {/* Task */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: project.accent + "20",
                        color: project.accent,
                      }}
                    >
                      T
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                      Task
                    </h3>
                  </div>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed pl-16">
                    Design and develop a modern, high-performance solution that
                    addresses the core challenges while maintaining cinematic
                    user experience and technical excellence.
                  </p>
                </div>

                {/* Action */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: project.accent + "20",
                        color: project.accent,
                      }}
                    >
                      A
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                      Action
                    </h3>
                  </div>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed pl-16">
                    {project.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: project.accent + "20",
                        color: project.accent,
                      }}
                    >
                      R
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                      Result
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-white dark:text-white light:text-zinc-900 leading-relaxed pl-16">
                    {project.result}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-8 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
                  <button className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full border border-white/20 dark:border-white/20 light:border-zinc-300 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-500">
                    <span className="text-sm font-bold uppercase tracking-widest">
                      View Full Case Study
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

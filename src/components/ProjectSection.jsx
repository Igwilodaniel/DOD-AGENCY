import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function ProjectSection({ project, isEven }) {
  const containerRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen w-full flex flex-col justify-center items-center py-24 px-6 md:px-24 overflow-hidden"
      >
        <motion.div
          style={{ opacity, scale }}
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          {/* Project Image Panel */}
          <div
            className={`col-span-1 md:col-span-7 ${isEven ? "md:order-1" : "md:order-2"}`}
          >
            <div
              className="relative group overflow-hidden rounded-2xl bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 aspect-video cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <motion.img
                style={{ y }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Hover Info */}
              <div className="absolute bottom-8 left-8 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <ArrowUpRight size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">
                  View Case Study
                </span>
              </div>
            </div>
          </div>

          {/* Storytelling Content */}
          <div
            className={`col-span-1 md:col-span-5 ${isEven ? "md:order-2 text-left" : "md:order-1 md:text-right"}`}
          >
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 uppercase mb-4 block">
                  {project.id} // {project.category}
                </span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white dark:text-white light:text-zinc-900">
                  {project.title}
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 dark:text-white/40 light:text-zinc-500">
                    The Problem
                  </h4>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 dark:text-white/40 light:text-zinc-500">
                    The Solution
                  </h4>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 dark:text-white/40 light:text-zinc-500">
                    The Results
                  </h4>
                  <p className="text-lg font-medium text-white dark:text-white light:text-zinc-900">
                    {project.result}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="group relative inline-flex items-center space-x-4 pt-8"
                style={{ color: project.accent }}
              >
                <span className="text-xs font-bold uppercase tracking-widest">
                  Deep Dive
                </span>
                <div className="w-12 h-[1px] bg-current group-hover:w-24 transition-all duration-500" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

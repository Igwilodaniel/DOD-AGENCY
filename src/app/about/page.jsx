import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomCursor from "../../components/CustomCursor";
import { ThemeProvider } from "../../utils/ThemeContext";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <ThemeProvider>
      <main className="relative bg-black dark:bg-black light:bg-zinc-50 min-h-screen font-sans selection:bg-white selection:text-black dark:selection:bg-white dark:selection:text-black light:selection:bg-zinc-900 light:selection:text-white overflow-hidden">
        <CustomCursor />
        <Navbar />

        {/* Mesh Gradient Background - update for light mode */}
        <div className="fixed inset-0 z-0 opacity-30 dark:opacity-30 light:opacity-20">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00F5FF] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A020F0] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#FF007F] rounded-full blur-[150px]" />
        </div>

        {/* Hero Section - update text colors */}
        <motion.section
          style={{ opacity, scale }}
          className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12"
        >
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold">
                About DOD
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-12 tracking-tight text-white dark:text-white light:text-zinc-900"
            >
              We craft websites that feel like{" "}
              <span className="italic text-[#00F5FF] dark:text-[#00F5FF] light:text-[#0088CC]">
                films
              </span>
              , not{" "}
              <span className="line-through text-zinc-700 dark:text-zinc-700 light:text-zinc-400">
                brochures
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-3xl font-light"
            >
              Every pixel. Every interaction. Every millisecond of load time.
              These aren't just details—they're the difference between a user
              who converts and one who bounces.
            </motion.p>
          </div>
        </motion.section>

        {/* Narrative Section - update all heading and text colors */}
        <section className="relative z-10 py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-24">
            {/* Story Block 1 - update accent colors */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                Performance is{" "}
                <span className="text-[#A020F0] dark:text-[#A020F0] light:text-[#7010C0]">
                  perception
                </span>
                .
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                A 0.1-second delay can cost you 7% in conversions. We obsess
                over Core Web Vitals, lazy loading, and edge caching so your
                audience experiences instant gratification. When your site loads
                faster than a heartbeat, trust is built before the first word is
                read.
              </p>
            </motion.div>

            {/* Story Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                Storytelling through{" "}
                <span className="text-[#00F5FF] dark:text-[#00F5FF] light:text-[#0088CC]">
                  motion
                </span>
                .
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                We don't just animate—we choreograph. Scroll-triggered parallax,
                micro-interactions, and physics-based springs guide your users
                through a journey, not a static grid. Every frame is
                intentional. Every transition earns its place.
              </p>
            </motion.div>

            {/* Story Block 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900">
                Built for{" "}
                <span className="text-[#FF007F] dark:text-[#FF007F] light:text-[#CC0060]">
                  scale
                </span>
                , designed for humans.
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                High-performance doesn't mean cold or mechanical. We architect
                React applications with modular components, optimized rendering,
                and accessibility baked in—so your platform grows without
                compromise. Code that's elegant behind the scenes. Experiences
                that feel effortless on the surface.
              </p>
            </motion.div>

            {/* Final Statement */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="pt-12 border-t border-white/10 dark:border-white/10 light:border-zinc-200"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white dark:text-white light:text-zinc-900">
                We don't build websites.
                <br />
                <span className="font-bold">
                  We engineer{" "}
                  <span className="bg-gradient-to-r from-[#00F5FF] via-[#A020F0] to-[#FF007F] dark:from-[#00F5FF] dark:via-[#A020F0] dark:to-[#FF007F] light:from-[#0088CC] light:via-[#7010C0] light:to-[#CC0060] bg-clip-text text-transparent">
                    digital experiences
                  </span>{" "}
                  that leave an impression.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - update button */}
        <section className="relative z-10 py-32 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-white dark:text-white light:text-zinc-900">
              Ready to make something unforgettable?
            </h3>
            <a
              href="/contact"
              className="inline-block text-lg uppercase tracking-widest border-2 border-white dark:border-white light:border-zinc-900 px-12 py-4 rounded-full hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-500 font-bold text-white dark:text-white light:text-zinc-900"
            >
              Start a Project
            </a>
          </motion.div>
        </section>

        <Footer
          nextProject={{
            title: "View Our Work",
            accent: "#00F5FF",
            image:
              "https://raw.createusercontent.com/275f182b-795f-40a7-a090-26ee3d57b8a0/",
          }}
        />
      </main>
    </ThemeProvider>
  );
}

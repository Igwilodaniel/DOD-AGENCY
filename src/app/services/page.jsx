import React from "react";
import { motion } from "motion/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomCursor from "../../components/CustomCursor";
import { ThemeProvider } from "../../utils/ThemeContext";

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    tagline: "Code that converts, not just displays.",
    benefit:
      "Your website isn't a digital business card—it's your most powerful sales tool. We build lightning-fast, scalable React applications that turn visitors into customers through intuitive UX, seamless performance, and conversion-optimized architecture.",
    capabilities: [
      "Custom React/Next.js builds",
      "Sub-second load times (Core Web Vitals optimization)",
      "Headless CMS integration for content agility",
      "E-commerce platforms built for growth",
    ],
    accent: "#00F5FF",
  },
  {
    number: "02",
    title: "Brand Strategy",
    tagline: "Identity that commands attention.",
    benefit:
      "In a saturated market, mediocre branding gets ignored. We craft visual identities and messaging frameworks that make your audience stop scrolling—and start believing. Your brand becomes the reason they choose you over the competition.",
    capabilities: [
      "Brand positioning & messaging architecture",
      "Visual identity systems (logos, typography, color theory)",
      "Motion design & cinematic storytelling",
      "Brand guidelines for consistent execution",
    ],
    accent: "#A020F0",
  },
  {
    number: "03",
    title: "Conversion Rate Optimization",
    tagline: "Turn traffic into revenue.",
    benefit:
      "Traffic without conversions is just noise. We analyze user behavior, identify friction points, and redesign your funnel to maximize ROI. Every button, every word, every interaction is engineered to guide users toward action.",
    capabilities: [
      "A/B testing & data-driven UX improvements",
      "Heatmap analysis & session recordings",
      "Landing page optimization for paid campaigns",
      "Checkout flow redesigns that reduce cart abandonment",
    ],
    accent: "#FF007F",
  },
];

export default function ServicesPage() {
  return (
    <ThemeProvider>
      <main className="relative bg-black dark:bg-black light:bg-zinc-50 min-h-screen font-sans selection:bg-white selection:text-black dark:selection:bg-white dark:selection:text-black light:selection:bg-zinc-900 light:selection:text-white overflow-hidden">
        <CustomCursor />
        <Navbar />

        {/* Mesh Gradient Background */}
        <div className="fixed inset-0 z-0 opacity-30 dark:opacity-30 light:opacity-20">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00F5FF] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#A020F0] rounded-full blur-[150px]" />
          <div className="absolute top-2/3 right-1/3 w-[400px] h-[400px] bg-[#FF007F] rounded-full blur-[150px]" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 pt-32">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-12 tracking-tight text-white dark:text-white light:text-zinc-900"
            >
              We don't sell services.
              <br />
              We deliver{" "}
              <span className="bg-gradient-to-r from-[#00F5FF] via-[#A020F0] to-[#FF007F] dark:from-[#00F5FF] dark:via-[#A020F0] dark:to-[#FF007F] light:from-[#0088CC] light:via-[#7010C0] light:to-[#CC0060] bg-clip-text text-transparent">
                outcomes
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-3xl font-light"
            >
              Strategy. Execution. Results. Every engagement is designed to
              elevate your brand and amplify your bottom line.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-32">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-12 md:gap-20 items-start"
              >
                {/* Left Column: Title & Tagline */}
                <div className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-6xl md:text-8xl font-black opacity-20"
                      style={{ color: service.accent }}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white dark:text-white light:text-zinc-900">
                        {service.title}
                      </h2>
                      <p
                        className="text-lg md:text-xl italic font-light"
                        style={{ color: service.accent }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Benefit & Capabilities */}
                <div className="space-y-8">
                  <p className="text-lg md:text-xl text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                    {service.benefit}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold">
                      What We Deliver
                    </h3>
                    <ul className="space-y-3">
                      {service.capabilities.map((capability, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-zinc-400 dark:text-zinc-400 light:text-zinc-600"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: service.accent }}
                          />
                          <span className="text-base md:text-lg">
                            {capability}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-block text-sm uppercase tracking-widest border-2 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white text-white dark:text-white light:text-zinc-900"
                    style={{ borderColor: service.accent }}
                  >
                    Explore This Service
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-32 px-6 md:px-12 border-t border-white/10 dark:border-white/10 light:border-zinc-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white dark:text-white light:text-zinc-900">
              Let's build something that performs.
            </h3>
            <p className="text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-12 max-w-2xl mx-auto">
              Schedule a strategy session and let's map out how we can transform
              your digital presence into a revenue-generating machine.
            </p>
            <a
              href="/contact"
              className="inline-block text-lg uppercase tracking-widest border-2 border-white dark:border-white light:border-zinc-900 px-12 py-4 rounded-full hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white transition-all duration-500 font-bold text-white dark:text-white light:text-zinc-900"
            >
              Get Started
            </a>
          </motion.div>
        </section>

        <Footer
          nextProject={{
            title: "See Our Work",
            accent: "#00F5FF",
            image:
              "https://raw.createusercontent.com/275f182b-795f-40a7-a090-26ee3d57b8a0/",
          }}
        />
      </main>
    </ThemeProvider>
  );
}

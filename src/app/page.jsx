import React from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { ThemeProvider } from "../utils/ThemeContext";

const PROJECTS = [
  {
    id: "01",
    title: "FinStream",
    category: "Fintech Solution",
    problem:
      "Traditional banking interfaces were cluttered and intimidating for new-gen investors, leading to a 40% drop-off in user engagement.",
    solution:
      "We developed a minimalist, gesture-driven platform that simplifies complex data into intuitive visual flows using high-performance React architecture.",
    result:
      "150% increase in daily active users and a 3.2x growth in average portfolio size within the first quarter.",
    accent: "#00F5FF", // Neon Cyan
    image:
      "https://raw.createusercontent.com/275f182b-795f-40a7-a090-26ee3d57b8a0/",
  },
  {
    id: "02",
    title: "Orion OS",
    category: "Aerospace UI",
    problem:
      "Astronauts required a zero-latency interface for real-time telemetry that could withstand extreme cognitive loads during mission-critical tasks.",
    solution:
      "A proprietary holographic UI system built with Skia-inspired rendering, prioritizing high-contrast data visualization and predictive AI assistance.",
    result:
      "Reduction in mission task duration by 25% and zero reported interface errors across 12 simulated sub-orbital flights.",
    accent: "#A020F0", // Vibrant Purple
    image:
      "https://raw.createusercontent.com/b8e3b2bb-483a-4965-907b-8fa792874a33/",
  },
  {
    id: "03",
    title: "Neuralis",
    category: "AI Platform",
    problem:
      'Complex AI models often felt like a "black box," alienating business stakeholders who couldn\'t interpret the underlying logic of data-driven decisions.',
    solution:
      "We created an immersive storytelling dashboard that visualizes neural network pathways in real-time, making AI decision-making transparent and interactive.",
    result:
      "Enterprise adoption grew by 200% as non-technical executives felt empowered to make data-backed strategic moves with confidence.",
    accent: "#FF007F", // Neon Pink
    image:
      "https://raw.createusercontent.com/ba75ee8a-a86e-430f-a5f0-2a606e3af1e3/",
  },
];

export default function PortfolioPage() {
  return (
    <ThemeProvider>
      <main className="relative bg-black dark:bg-black light:bg-zinc-50 min-h-screen font-sans selection:bg-white selection:text-black dark:selection:bg-white dark:selection:text-black light:selection:bg-zinc-900 light:selection:text-white">
        <CustomCursor />
        <Navbar />
        <Hero />

        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        <Footer nextProject={PROJECTS[0]} />
      </main>
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomCursor from "../../components/CustomCursor";
import { ThemeProvider } from "../../utils/ThemeContext";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", challenge: "" });
      setSubmitSuccess(false);
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.challenge;

  return (
    <ThemeProvider>
      <main className="relative bg-black dark:bg-black light:bg-zinc-50 min-h-screen font-sans selection:bg-white selection:text-black dark:selection:bg-white dark:selection:text-black light:selection:bg-zinc-900 light:selection:text-white overflow-hidden">
        <CustomCursor />
        <Navbar />

        {/* Mesh Gradient Background - update for light mode */}
        <div className="fixed inset-0 z-0 opacity-30 dark:opacity-30 light:opacity-20">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00F5FF] dark:bg-[#00F5FF] light:bg-[#00F5FF] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#A020F0] dark:bg-[#A020F0] light:bg-[#A020F0] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#FF007F] dark:bg-[#FF007F] light:bg-[#FF007F] rounded-full blur-[150px]" />
        </div>

        {/* Hero Section - update text colors */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 pt-32">
          <div className="max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-12 tracking-tight text-white dark:text-white light:text-zinc-900"
            >
              Let's solve your{" "}
              <span className="bg-gradient-to-r from-[#00F5FF] via-[#A020F0] to-[#FF007F] dark:from-[#00F5FF] dark:via-[#A020F0] dark:to-[#FF007F] light:from-[#0088CC] light:via-[#7010C0] light:to-[#CC0060] bg-clip-text text-transparent">
                biggest challenge
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-3xl font-light mb-16"
            >
              Tell us what you're trying to achieve. We'll respond within 24
              hours with a strategic roadmap tailored to your goals.
            </motion.p>

            {/* Contact Form - update all input border and text colors for light mode */}
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-8 max-w-3xl"
            >
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 dark:border-white/20 light:border-zinc-300 focus:border-[#00F5FF] dark:focus:border-[#00F5FF] light:focus:border-[#0088CC] outline-none py-4 text-xl text-white dark:text-white light:text-zinc-900 placeholder-transparent peer transition-colors"
                  placeholder="Your Name"
                />
                <label
                  className={`absolute left-0 -top-3.5 text-zinc-500 dark:text-zinc-500 light:text-zinc-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#00F5FF] dark:peer-focus:text-[#00F5FF] light:peer-focus:text-[#0088CC] ${
                    formData.name
                      ? "text-[#00F5FF] dark:text-[#00F5FF] light:text-[#0088CC]"
                      : ""
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 dark:border-white/20 light:border-zinc-300 focus:border-[#A020F0] dark:focus:border-[#A020F0] light:focus:border-[#7010C0] outline-none py-4 text-xl text-white dark:text-white light:text-zinc-900 placeholder-transparent peer transition-colors"
                  placeholder="Email Address"
                />
                <label
                  className={`absolute left-0 -top-3.5 text-zinc-500 dark:text-zinc-500 light:text-zinc-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#A020F0] dark:peer-focus:text-[#A020F0] light:peer-focus:text-[#7010C0] ${
                    formData.email
                      ? "text-[#A020F0] dark:text-[#A020F0] light:text-[#7010C0]"
                      : ""
                  }`}
                >
                  Email Address
                </label>
              </div>

              {/* Company Field (Optional) */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/20 dark:border-white/20 light:border-zinc-300 focus:border-[#FF007F] dark:focus:border-[#FF007F] light:focus:border-[#CC0060] outline-none py-4 text-xl text-white dark:text-white light:text-zinc-900 placeholder-transparent peer transition-colors"
                  placeholder="Company Name (Optional)"
                />
                <label
                  className={`absolute left-0 -top-3.5 text-zinc-500 dark:text-zinc-500 light:text-zinc-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#FF007F] dark:peer-focus:text-[#FF007F] light:peer-focus:text-[#CC0060] ${
                    formData.company
                      ? "text-[#FF007F] dark:text-[#FF007F] light:text-[#CC0060]"
                      : ""
                  }`}
                >
                  Company Name (Optional)
                </label>
              </div>

              {/* Challenge Field */}
              <div className="relative">
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border-2 border-white/20 dark:border-white/20 light:border-zinc-300 focus:border-[#00F5FF] dark:focus:border-[#00F5FF] light:focus:border-[#0088CC] outline-none p-4 text-xl text-white dark:text-white light:text-zinc-900 placeholder-transparent peer transition-colors rounded-lg resize-none"
                  placeholder="What's your biggest challenge right now?"
                />
                <label
                  className={`absolute left-4 -top-3.5 bg-black dark:bg-black light:bg-zinc-50 px-2 text-zinc-500 dark:text-zinc-500 light:text-zinc-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#00F5FF] dark:peer-focus:text-[#00F5FF] light:peer-focus:text-[#0088CC] ${
                    formData.challenge
                      ? "text-[#00F5FF] dark:text-[#00F5FF] light:text-[#0088CC]"
                      : ""
                  }`}
                >
                  What's your biggest challenge right now?
                </label>
              </div>

              {/* Submit Button with Success Indicator - update colors */}
              <div className="flex items-center gap-6">
                <motion.button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  whileHover={isFormValid ? { scale: 1.05 } : {}}
                  whileTap={isFormValid ? { scale: 0.95 } : {}}
                  className={`text-lg uppercase tracking-widest border-2 px-12 py-4 rounded-full font-bold transition-all duration-500 ${
                    isFormValid
                      ? "border-white dark:border-white light:border-zinc-900 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black light:hover:bg-zinc-900 light:hover:text-white cursor-pointer text-white dark:text-white light:text-zinc-900"
                      : "border-white/20 dark:border-white/20 light:border-zinc-300 text-white/40 dark:text-white/40 light:text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit Challenge"}
                </motion.button>

                {/* Success Indicator Badge - update colors */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 bg-[#00F5FF]/20 dark:bg-[#00F5FF]/20 light:bg-[#0088CC]/20 border border-[#00F5FF] dark:border-[#00F5FF] light:border-[#0088CC] rounded-full px-6 py-3"
                  >
                    <svg
                      className="w-5 h-5 text-[#00F5FF] dark:text-[#00F5FF] light:text-[#0088CC]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#00F5FF] dark:text-[#00F5FF] light:text-[#0088CC] font-bold text-sm uppercase tracking-wider">
                      Sent Successfully
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.form>

            {/* Contact Info - update text colors */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-24 pt-12 border-t border-white/10 dark:border-white/10 light:border-zinc-200 grid md:grid-cols-3 gap-8 max-w-3xl"
            >
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@dod.agency"
                  className="text-lg text-white dark:text-white light:text-zinc-900 hover:text-[#00F5FF] dark:hover:text-[#00F5FF] light:hover:text-[#0088CC] transition-colors"
                >
                  hello@dod.agency
                </a>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold mb-2">
                  Location
                </h3>
                <p className="text-lg text-white dark:text-white light:text-zinc-900">
                  New York, NY
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold mb-2">
                  Response Time
                </h3>
                <p className="text-lg text-white dark:text-white light:text-zinc-900">
                  Within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
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

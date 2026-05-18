"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Background shape */}
      <div
        className="absolute -right-32 top-1/4 w-[400px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Experience
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            What I do when I&apos;m not sleeping.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-16 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className="timeline-dot"
                style={{ top: "6px" }}
              />

              <div
                className="glass-card rounded-2xl p-6 nature-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="p-2 rounded-xl flex-shrink-0"
                    style={{ background: "var(--bg-hover)" }}
                  >
                    <Briefcase size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </span>
                  </div>
                </div>

                <p
                  className="text-sm mb-3 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {exp.description}
                </p>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm flex items-start gap-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

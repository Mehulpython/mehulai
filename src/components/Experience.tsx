"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Experience
          </h2>
          <p className="text-base" style={{ color: "var(--text-tertiary)" }}>
            What I do when I&apos;m not sleeping.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-track">
            <div className="timeline-fill" style={{ height: "100%" }} />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-14 pb-10 last:pb-0"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot" style={{ top: "8px" }} />

              <div className="card card-hover p-5">
                <div className="flex items-start justify-between mb-2 gap-3">
                  <div>
                    <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="font-display text-2xl font-bold leading-none flex-shrink-0"
                    style={{ color: "var(--border-strong)" }}
                  >
                    {String(experiences.length - index).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm mb-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {exp.description}
                </p>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-[13px] flex items-start gap-2 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
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

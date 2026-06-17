"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const skillCategories = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "Java", "Scala", "SQL"],
  },
  {
    label: "Cloud & Infra",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Redis"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Flask", "Django", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "Data & AI",
    items: ["PostgreSQL", "MongoDB", "PySpark", "Databricks", "AI/LLM", "OpenAI", "Power BI"],
  },
  {
    label: "Tools & Practices",
    items: ["Git", "Stripe", "REST APIs", "React Native", "Expo", "Framer Motion"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
            From stethoscope to keyboard.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Narrative */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Hey, I&apos;m{" "}
              <strong style={{ color: "var(--text-primary)" }}>Mehul</strong> — a Software Engineer
              at <strong style={{ color: "var(--text-primary)" }}>Vanguard</strong> with an unusual
              background.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I started in medicine — earning my <strong style={{ color: "var(--text-primary)" }}>MBBS (MD)</strong> from India and{" "}
              <strong style={{ color: "var(--text-primary)" }}>MPH</strong> from Ohio University. I spent years
              in clinical research at{" "}
              <strong style={{ color: "var(--text-primary)" }}>Cleveland Clinic</strong>, publishing 6
              peer-reviewed papers cited{" "}
              <strong style={{ color: "var(--text-primary)" }}>259+ times</strong> in top medical journals.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Based in{" "}
              <strong style={{ color: "var(--text-primary)" }}>Harrisburg, PA</strong>, I now spend my days
              building enterprise software and my nights creating AI-powered products. From clinical trials to
              code — the common thread has always been{" "}
              <strong style={{ color: "var(--text-primary)" }}>solving real problems with data</strong>.
            </p>

            {/* Career pivot visual */}
            <div className="flex items-center gap-3 pt-4">
              <span className="pill" style={{ background: "var(--bg-subtle)", color: "var(--text-secondary)", borderColor: "var(--border)" }}>
                ⚕️ Medicine
              </span>
              <div className="flex items-center gap-1">
                <div className="w-8 h-px" style={{ background: "var(--border-strong)" }} />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="w-8 h-px" style={{ background: "var(--border-strong)" }} />
              </div>
              <span className="pill" style={{ background: "var(--accent-glow)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                💻 Engineering
              </span>
            </div>
          </motion.div>

          {/* Skills — categorized */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillCategories.map((cat, i) => (
              <div key={cat.label}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "var(--text-tertiary)" }}>
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

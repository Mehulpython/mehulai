"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Organic background shape */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            About
          </h2>
        </motion.div>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 nature-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              Hey, I&apos;m{" "}
              <strong style={{ color: "var(--text-primary)" }}>Mehul</strong> — a
              Software Engineer at{" "}
              <strong style={{ color: "var(--text-primary)" }}>Vanguard</strong>{" "}
              with an unusual background.
            </p>
            <p>
              I started in medicine — earning my <strong style={{ color: "var(--text-primary)" }}>MBBS (MD)</strong> from India and{" "}
              <strong style={{ color: "var(--text-primary)" }}>MPH</strong> from Ohio University. I spent years
              in clinical research at <strong style={{ color: "var(--text-primary)" }}>Cleveland Clinic</strong>,
              publishing 6 peer-reviewed papers that have been cited{" "}
              <strong style={{ color: "var(--text-primary)" }}>259+ times</strong> in top medical journals. My work
              spanned gastroenterology, diabetes, and public health.
            </p>
            <p>
              Based in{" "}
              <strong style={{ color: "var(--text-primary)" }}>Harrisburg, PA</strong>,
              I now spend my days building enterprise software and my nights creating
              AI-powered products from scratch. From clinical trials to code —
              the common thread has always been{" "}
              <strong style={{ color: "var(--text-primary)" }}>solving real problems with data</strong>.
            </p>
          </div>

          {/* Skills grid */}
          <div
            className="mt-8 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="text-sm font-medium mb-4 uppercase tracking-wider"
              style={{ color: "var(--text-tertiary)" }}
            >
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag px-4 py-2 rounded-2xl text-sm font-medium cursor-default transition-all"
                  style={{
                    background: "var(--bg-hover)",
                    color: "var(--accent)",
                    border: "1px solid var(--border)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
